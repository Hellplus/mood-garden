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
    {
      text: "这份笑意很珍贵，像一束刚好照进窗边的光。",
      keywords: ["笑", "开心", "快乐", "高兴", "好棒", "好开心"]
    },
    {
      text: "被喜欢的事物点亮时，心里也会悄悄开花。",
      keywords: ["喜欢", "爱", "期待", "礼物", "惊喜"]
    },
    {
      text: "顺利的一天值得被记住，它会成为以后的小小底气。",
      keywords: ["顺利", "成功", "完成", "做完", "进步"]
    },
    {
      text: "今天的光也在偏爱你。",
      keywords: []
    }
  ],
  calm: [
    {
      text: "慢慢呼吸就好，安静的时刻也有自己的花期。",
      keywords: ["安静", "平静", "呼吸", "慢慢", "放松"]
    },
    {
      text: "独处不是空白，是把心轻轻放回自己身边。",
      keywords: ["独处", "一个人", "自己", "散步", "发呆"]
    },
    {
      text: "平凡的小事正在托住你，像柔软的土托住花根。",
      keywords: ["普通", "日常", "平凡", "简单", "稳定"]
    },
    {
      text: "安稳的心，也能开出很轻的花。",
      keywords: []
    }
  ],
  anxious: [
    {
      text: "先不用把所有答案都找齐，今天只走下一小步就好。",
      keywords: ["担心", "焦虑", "害怕", "紧张", "不安"]
    },
    {
      text: "压力来的时候，记得你不是问题本身，你只是正在经过它。",
      keywords: ["压力", "工作", "加班", "任务", "ddl", "deadline"]
    },
    {
      text: "考试和结果都很重要，但你的呼吸也同样重要。",
      keywords: ["考试", "面试", "成绩", "结果", "失败", "明天", "紧张"]
    },
    {
      text: "先把脚放回地面，花会一点点长大。",
      keywords: []
    }
  ],
  tired: [
    {
      text: "困意也是身体写来的信：请把自己放轻一点。",
      keywords: ["困", "睡", "熬夜", "没睡", "起不来"]
    },
    {
      text: "忙了这么久，你可以先停一停，让心也喝一点水。",
      keywords: ["累", "疲惫", "忙", "加班", "辛苦"]
    },
    {
      text: "今天不必盛放，先把力气慢慢养回来。",
      keywords: ["没力气", "低电量", "撑不住", "休息", "崩溃"]
    },
    {
      text: "休息不是停下，是让花根重新喝到水。",
      keywords: []
    }
  ],
  excited: [
    {
      text: "这份期待正在心里发光，像花苞等着清晨。",
      keywords: ["期待", "马上", "明天", "计划", "开始"]
    },
    {
      text: "新的机会来了，先把这份勇气好好握在手里。",
      keywords: ["机会", "新", "挑战", "尝试", "出发"]
    },
    {
      text: "热烈的心也需要一个温柔的位置，慢慢亮着就好。",
      keywords: ["激动", "兴奋", "开心到", "睡不着", "太棒"]
    },
    {
      text: "这份闪闪发亮的期待，正在开花。",
      keywords: []
    }
  ]
};

const sceneQuoteMap = [
  {
    priority: 4,
    keywords: ["合同", "签了", "签下", "签约", "成交", "拿下", "offer", "录取", "通过"],
    quotes: {
      happy: [
        "这份好消息值得被认真庆祝，你的努力终于有了回声。",
        "重要的事尘埃落定，今天的花也开得特别踏实。"
      ],
      calm: [
        "一件重要的事安稳落地，心也可以慢慢松一口气了。"
      ],
      anxious: [
        "结果已经落地了，先允许自己从紧绷里慢慢回来。"
      ],
      tired: [
        "重要的事终于完成，今晚可以把肩上的重量放下一些。"
      ],
      excited: [
        "合同落定的这一刻，努力终于开出一朵很响亮的花。",
        "这份终于等到的好消息，值得被你亮亮地收进今天。"
      ]
    }
  },
  {
    priority: 3,
    keywords: ["考试", "面试", "成绩", "考研", "考公", "答辩", "复习", "题", "紧张"],
    quotes: {
      happy: [
        "为考试努力过的每一步，都会在心里留下小小的光。"
      ],
      calm: [
        "把考试放在明天，把呼吸放回现在，今晚先安稳一点。"
      ],
      anxious: [
        "明天的考试很重要，但此刻的你也需要被温柔安放。",
        "紧张说明你很在乎，先慢慢呼吸，再把今天过完。"
      ],
      tired: [
        "复习和担心都很耗电，今晚先让身体有一点点恢复。"
      ],
      excited: [
        "带着准备好的自己走向明天，紧张里也藏着一点勇气。"
      ]
    }
  },
  {
    priority: 3,
    keywords: ["老婆", "老公", "孩子", "家人", "一家", "妻子", "丈夫", "女儿", "儿子", "父母", "妈妈", "爸爸"],
    quotes: {
      happy: [
        "和重要的人一起走过今天，快乐就有了很具体的模样。",
        "家人在身边的时刻，会把普通一天变成柔软的纪念。"
      ],
      calm: [
        "陪家人慢慢待着，也是一种很安稳的开花。"
      ],
      anxious: [
        "有牵挂的人在心里，紧张也可以被慢慢接住。"
      ],
      tired: [
        "陪伴也会消耗力气，今晚记得把温柔留一点给自己。"
      ],
      excited: [
        "和喜欢的人一起热闹过，今天的花会开得更久一点。"
      ]
    }
  },
  {
    priority: 2,
    keywords: ["颐和园", "公园", "散步", "逛", "旅行", "出门", "风景", "湖", "山", "花", "晒太阳"],
    quotes: {
      happy: [
        "今天的风景和心情都很合拍，像一页会发光的日记。",
        "把路上的风、光和笑意收好，它们都会变成花园的养分。"
      ],
      calm: [
        "走在风景里时，心也有机会慢慢舒展开。"
      ],
      anxious: [
        "让风景替你分走一点紧张，脚步会带心慢慢变轻。"
      ],
      tired: [
        "出门走过的路也算一种充电，今晚可以安心慢下来。"
      ],
      excited: [
        "今天的风景很亮，你的心情也跟着热烈起来了。"
      ]
    }
  },
  {
    priority: 2,
    keywords: ["加班", "工作", "项目", "任务", "会议", "老板", "同事", "ddl", "deadline", "忙"],
    quotes: {
      happy: [
        "忙碌里仍有值得开心的片刻，它们是今天的小花。"
      ],
      calm: [
        "工作再多，也可以先把这一刻还给自己的呼吸。"
      ],
      anxious: [
        "工作压力来的时候，先抓住下一件能完成的小事就好。"
      ],
      tired: [
        "忙了这么久，你可以先停一停，让心也喝一点水。",
        "今天的辛苦已经很多了，剩下的交给休息慢慢修复。"
      ],
      excited: [
        "忙碌里的推进感很亮，像一朵正在用力开放的花。"
      ]
    }
  }
];

const storageKey = "moodGardenFlowers";

const moodOptions = document.querySelector("#moodOptions");
const noteInput = document.querySelector("#noteInput");
const plantButton = document.querySelector("#plantButton");
const clearButton = document.querySelector("#clearButton");
const flowerList = document.querySelector("#flowerList");
const flowerCount = document.querySelector("#flowerCount");
const totalCount = document.querySelector("#totalCount");
const statsList = document.querySelector("#statsList");
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
    id: Date.now(),
    mood: selectedMood,
    note,
    flowerQuote: getRandomFlowerQuote(selectedMood, note),
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
    empty.textContent = "花园还是空的。选一种情绪，种下今天的第一朵花。";
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

function getRandomFlowerQuote(mood, note) {
  const normalizedNote = (note || "").toLowerCase();
  const sceneQuotes = getSceneQuotes(mood, normalizedNote);

  if (sceneQuotes.length > 0) {
    return getRandomItem(sceneQuotes);
  }

  const quotes = flowerQuoteMap[mood] || flowerQuoteMap.happy;
  const scoredQuotes = quotes.map((quote) => {
    const score = quote.keywords.filter((keyword) => {
      return normalizedNote.includes(keyword.toLowerCase());
    }).length;

    return {
      quote,
      score
    };
  });
  const bestScore = Math.max(...scoredQuotes.map((item) => item.score));
  const quotePool = bestScore > 0
    ? scoredQuotes.filter((item) => item.score === bestScore).map((item) => item.quote)
    : quotes;

  return getRandomItem(quotePool).text;
}

function getSceneQuotes(mood, normalizedNote) {
  const scoredScenes = sceneQuoteMap.map((scene) => {
    const matchCount = scene.keywords.filter((keyword) => {
      return normalizedNote.includes(keyword.toLowerCase());
    }).length;

    return {
      scene,
      score: matchCount > 0 ? matchCount + scene.priority : 0
    };
  });
  const bestScore = Math.max(...scoredScenes.map((item) => item.score));

  if (bestScore === 0) {
    return [];
  }

  return scoredScenes
    .filter((item) => item.score === bestScore)
    .flatMap((item) => item.scene.quotes[mood] || item.scene.quotes.happy || []);
}

function getRandomItem(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function formatDate(date) {
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
