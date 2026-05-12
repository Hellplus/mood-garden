const moodMap = {
  happy: {
    name: "开心",
    emoji: "🌻",
    className: "mood-happy",
    copy: "阳光已经落在你的小花瓣上。"
  },
  calm: {
    name: "平静",
    emoji: "🌿",
    className: "mood-calm",
    copy: "安静也是一种很温柔的力量。"
  },
  anxious: {
    name: "焦虑",
    emoji: "🌧️",
    className: "mood-anxious",
    copy: "先呼吸一下，今天不用一次长成森林。"
  },
  tired: {
    name: "疲惫",
    emoji: "🌙",
    className: "mood-tired",
    copy: "慢慢休息，花也会在夜里生长。"
  },
  excited: {
    name: "兴奋",
    emoji: "🌺",
    className: "mood-excited",
    copy: "把这份亮晶晶的能量好好收藏。"
  }
};

const flowerQuoteMap = {
  happy: [
    "今天的光也在偏爱你。",
    "快乐不是小事，它是一朵正在盛开的花。",
    "把这份明亮收好，它会在平凡日子里继续发芽。",
    "你的笑意，正在给今天染上一点金色。"
  ],
  calm: [
    "安稳的心，也能开出很轻的花。",
    "不用追赶风，今天适合慢慢呼吸。",
    "平静不是空白，是你正在温柔地陪着自己。",
    "慢一点也很好，花会按自己的节奏长大。"
  ],
  anxious: [
    "先把脚放回地面，花会一点点长大。",
    "你不需要马上解决一切，先照顾此刻的自己。",
    "云会经过，心也会重新有光。",
    "紧张的时候，先把今天切成小小的一步。"
  ],
  tired: [
    "休息不是停下，是让花根重新喝到水。",
    "今天可以轻一点，慢一点，也仍然很好。",
    "夜色会替你保管疲惫，明天再慢慢生长。",
    "不必强撑，花也有安静蓄力的时候。"
  ],
  excited: [
    "这份闪闪发亮的期待，正在开花。",
    "让热烈有地方停靠，让快乐有名字。",
    "今天的你带着风，也带着花香。",
    "新的可能正在靠近，你的心先一步亮了起来。"
  ]
};

const storageKey = "moodGardenFlowers";

const moodOptions = document.querySelector("#moodOptions");
const noteInput = document.querySelector("#noteInput");
const plantButton = document.querySelector("#plantButton");
const clearButton = document.querySelector("#clearButton");
const flowerList = document.querySelector("#flowerList");
const flowerCount = document.querySelector("#flowerCount");
const totalCount = document.querySelector("#totalCount");
const statsList = document.querySelector("#statsList");
const gardenNote = document.querySelector("#gardenNote");
const message = document.querySelector("#message");

let selectedMood = "happy";
let flowers = loadFlowers();

renderFlowers();
renderStats();

moodOptions.addEventListener("click", (event) => {
  const button = event.target.closest(".mood-button");

  if (!button) {
    return;
  }

  selectedMood = button.dataset.mood;

  document.querySelectorAll(".mood-button").forEach((item) => {
    item.classList.toggle("active", item === button);
  });
});

plantButton.addEventListener("click", () => {
  const note = noteInput.value.trim();

  if (!note) {
    message.textContent = "先给今天留下一句小小的心情，再把花种下吧。";
    noteInput.focus();
    return;
  }

  const flower = {
    id: createFlowerId(),
    mood: selectedMood,
    note,
    flowerQuote: getRandomFlowerQuote(selectedMood),
    date: formatDate(new Date())
  };

  flowers.unshift(flower);
  const saved = saveFlowers();
  renderFlowers();
  renderStats();

  noteInput.value = "";
  message.textContent = saved
    ? "已经种下了，一朵新的情绪花正在花园里发光。"
    : "这朵花已经显示出来了，但浏览器暂时没能保存它。";
});

clearButton.addEventListener("click", () => {
  if (flowers.length === 0) {
    message.textContent = "花园现在是空的，先种下一朵花吧。";
    return;
  }

  const shouldClear = confirm("确定要清空整个花园吗？这个操作不能撤销。");

  if (!shouldClear) {
    message.textContent = "花园还在，所有花朵都被好好保留着。";
    return;
  }

  flowers = [];
  const cleared = clearSavedFlowers();
  renderFlowers();
  renderStats();
  message.textContent = cleared
    ? "花园已经清空。什么时候想重新开始，都可以再种下一朵花。"
    : "页面里的花园已清空，但浏览器暂时没能清除本地记录。";
});

function loadFlowers() {
  let saved = "";

  try {
    saved = localStorage.getItem(storageKey);
  } catch (error) {
    console.warn("读取历史花朵失败：", error);
    return [];
  }

  if (!saved) {
    return [];
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("读取历史花朵失败：", error);
    return [];
  }
}

function saveFlowers() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(flowers));
    return true;
  } catch (error) {
    console.warn("保存花朵失败：", error);
    return false;
  }
}

function clearSavedFlowers() {
  try {
    localStorage.removeItem(storageKey);
    return true;
  } catch (error) {
    console.warn("清空历史花朵失败：", error);
    return false;
  }
}

function renderFlowers() {
  flowerList.innerHTML = "";
  flowerCount.textContent = `${flowers.length} 朵花`;
  clearButton.disabled = flowers.length === 0;

  if (flowers.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "这里还没有花。选一种今天的情绪，写下一句话，慢慢种下第一朵吧。";
    flowerList.appendChild(empty);
    return;
  }

  flowers.forEach((flower) => {
    const mood = moodMap[flower.mood] || moodMap.happy;
    const flowerQuote = flower.flowerQuote || flower.flowerLanguage || mood.copy;
    const card = document.createElement("article");

    card.className = `flower-card ${mood.className}`;
    card.dataset.emoji = mood.emoji;
    card.innerHTML = `
      <div class="flower-top">
        <span class="flower-emoji" aria-hidden="true">${mood.emoji}</span>
        <span class="flower-date">创建于 ${flower.date || "未知日期"}</span>
      </div>
      <h3>${mood.name}</h3>
      <p class="flower-note"></p>
      <p class="flower-copy"></p>
    `;

    card.querySelector(".flower-note").textContent = flower.note;
    card.querySelector(".flower-copy").textContent = flowerQuote;
    flowerList.appendChild(card);
  });
}

function renderStats() {
  const savedFlowers = loadFlowers();

  totalCount.textContent = `共 ${savedFlowers.length} 朵花`;
  statsList.innerHTML = "";
  gardenNote.textContent = getGardenNote(savedFlowers);

  Object.keys(moodMap).forEach((moodKey) => {
    const mood = moodMap[moodKey];
    const count = savedFlowers.filter((flower) => flower.mood === moodKey).length;
    const item = document.createElement("div");

    item.className = "stats-item";
    item.innerHTML = `
      <span class="stats-mood">${mood.emoji} ${mood.name}</span>
      <span class="stats-number">${count}</span>
    `;

    statsList.appendChild(item);
  });
}

function getRandomFlowerQuote(mood) {
  const quotes = flowerQuoteMap[mood] || flowerQuoteMap.happy;
  return getRandomItem(quotes);
}

function getRandomItem(items) {
  if (items.length === 0) {
    return "";
  }

  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function getGardenNote(savedFlowers) {
  if (savedFlowers.length === 0) {
    return "花园还在等第一朵花。今天的一点点心情，也值得被温柔记录。";
  }

  const latestFlower = savedFlowers[0];
  const mood = moodMap[latestFlower.mood] || moodMap.happy;

  return `最近一朵花是「${mood.name}」。愿这座小花园慢慢接住你的每一天。`;
}

function createFlowerId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function formatDate(date) {
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
