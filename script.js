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
const themeStorageKey = "moodGardenTheme";
const validThemes = ["light", "dark", "pink"];
const themeNames = {
  light: "浅色",
  dark: "深色",
  pink: "治愈粉"
};

const moodOptions = document.querySelector("#moodOptions");
const noteInput = document.querySelector("#noteInput");
const plantButton = document.querySelector("#plantButton");
const clearButton = document.querySelector("#clearButton");
const exportButton = document.querySelector("#exportButton");
const exportBackupButton = document.querySelector("#exportBackupButton");
const importBackupInput = document.querySelector("#importBackupInput");
const importModeSelect = document.querySelector("#importModeSelect");
const flowerList = document.querySelector("#flowerList");
const flowerCount = document.querySelector("#flowerCount");
const totalCount = document.querySelector("#totalCount");
const statsList = document.querySelector("#statsList");
const gardenNote = document.querySelector("#gardenNote");
const message = document.querySelector("#message");
const moodFilter = document.querySelector("#moodFilter");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const resetFiltersButton = document.querySelector("#resetFiltersButton");
const filterCount = document.querySelector("#filterCount");
const themeSelect = document.querySelector("#themeSelect");
const toast = document.querySelector("#toast");

const defaultBrowseState = {
  mood: "all",
  keyword: "",
  sort: "newest"
};

const backupAppName = "Mood Garden";
const backupVersion = "1.2";

let selectedMood = "happy";
let flowers = loadFlowers();
let editingFlowerId = "";
let browseState = { ...defaultBrowseState };
let toastTimer = 0;
let listAnimationTimer = 0;
let newFlowerId = "";
let updatedFlowerId = "";
const addedMissingData = addMissingFlowerData();

if (addedMissingData) {
  saveFlowers();
}

applyTheme(loadTheme());
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
    showMessage("先给今天留下一句小小的心情，再把花种下吧。", "error");
    noteInput.focus();
    return;
  }

  const flower = {
    id: createFlowerId(),
    mood: selectedMood,
    note,
    flowerQuote: getRandomFlowerQuote(selectedMood),
    createdAt: Date.now(),
    date: formatDate(new Date())
  };

  flowers.unshift(flower);
  newFlowerId = flower.id;
  const saved = saveFlowers();
  renderFlowers();
  renderStats();

  noteInput.value = "";
  showMessage(
    saved
      ? "已经种下了，一朵新的情绪花正在花园里发光。"
      : "这朵花已经显示出来了，但浏览器暂时没能保存它。",
    saved ? "success" : "error"
  );
});

moodFilter.addEventListener("change", () => {
  browseState.mood = moodFilter.value;
  editingFlowerId = "";
  renderFlowers({ animateList: true });
});

searchInput.addEventListener("input", () => {
  browseState.keyword = searchInput.value.trim().toLowerCase();
  editingFlowerId = "";
  renderFlowers();
});

sortSelect.addEventListener("change", () => {
  browseState.sort = sortSelect.value;
  editingFlowerId = "";
  renderFlowers({ animateList: true });
});

resetFiltersButton.addEventListener("click", () => {
  resetBrowseState();
});

themeSelect.addEventListener("change", () => {
  const nextTheme = themeSelect.value;
  const saved = saveTheme(nextTheme);

  applyTheme(nextTheme);
  showMessage(
    saved
      ? `已经切换到${getThemeName(nextTheme)}主题。`
      : "主题已经切换，但浏览器暂时没能记住这次选择。",
    saved ? "success" : "error"
  );
});

exportButton.addEventListener("click", () => {
  const savedFlowers = loadFlowers();

  if (savedFlowers.length === 0) {
    showMessage("花园里还没有花，先种下一朵，再导出属于你的情绪日记吧。", "info");
    return;
  }

  const diaryText = createDiaryText(savedFlowers);
  const fileName = createDiaryFileName(new Date());

  downloadTextFile(diaryText, fileName);
  showMessage("情绪日记已经整理好了，正在为你下载。", "success");
});

exportBackupButton.addEventListener("click", () => {
  exportBackup();
});

importBackupInput.addEventListener("change", (event) => {
  handleBackupFileChange(event);
});

clearButton.addEventListener("click", () => {
  if (flowers.length === 0) {
    showMessage("花园现在是空的，先种下一朵花吧。", "info");
    return;
  }

  const shouldClear = confirm("确定要清空整个花园吗？这个操作不能撤销。");

  if (!shouldClear) {
    showMessage("花园还在，所有花朵都被好好保留着。", "info");
    return;
  }

  flowers = [];
  editingFlowerId = "";
  const cleared = clearSavedFlowers();
  renderFlowers();
  renderStats();
  showMessage(
    cleared
      ? "花园已经清空。什么时候想重新开始，都可以再种下一朵花。"
      : "页面里的花园已清空，但浏览器暂时没能清除本地记录。",
    cleared ? "success" : "error"
  );
});

flowerList.addEventListener("click", (event) => {
  const saveEditButton = event.target.closest(".save-edit-button");
  const cancelEditButton = event.target.closest(".cancel-edit-button");
  const editButton = event.target.closest(".edit-flower-button");
  const deleteButton = event.target.closest(".delete-flower-button");

  if (saveEditButton) {
    saveEditedFlower(saveEditButton.dataset.id);
    return;
  }

  if (cancelEditButton) {
    cancelEditingFlower();
    return;
  }

  if (editButton) {
    startEditingFlower(editButton.dataset.id);
    return;
  }

  if (deleteButton) {
    deleteFlower(deleteButton.dataset.id, deleteButton.closest(".flower-card"));
  }
});

function loadTheme() {
  let savedTheme = "";

  try {
    savedTheme = localStorage.getItem(themeStorageKey);
  } catch (error) {
    console.warn("读取主题失败：", error);
  }

  return validThemes.includes(savedTheme) ? savedTheme : "light";
}

function saveTheme(theme) {
  if (!validThemes.includes(theme)) {
    return false;
  }

  try {
    localStorage.setItem(themeStorageKey, theme);
    return true;
  } catch (error) {
    console.warn("保存主题失败：", error);
    return false;
  }
}

function applyTheme(theme) {
  const safeTheme = validThemes.includes(theme) ? theme : "light";

  document.body.dataset.theme = safeTheme;
  themeSelect.value = safeTheme;
}

function getThemeName(theme) {
  return themeNames[theme] || themeNames.light;
}

function showMessage(text, type = "info") {
  message.textContent = text;
  showToast(text, type);
}

function showToast(text, type = "info") {
  toast.textContent = text;
  toast.className = `toast ${type} show`;

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

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

function addMissingFlowerData() {
  let changed = false;
  const now = Date.now();

  flowers.forEach((flower, index) => {
    if (!flower.id) {
      flower.id = createFlowerId();
      changed = true;
    }

    if (!Number.isFinite(flower.createdAt)) {
      flower.createdAt = now - index;
      changed = true;
    }
  });

  return changed;
}

function getVisibleFlowers() {
  let visibleFlowers = [...flowers];

  visibleFlowers = visibleFlowers.filter((flower) => {
    return matchesMood(flower) && matchesKeyword(flower);
  });

  return sortVisibleFlowers(visibleFlowers);
}

function sortVisibleFlowers(visibleFlowers) {
  return visibleFlowers
    .map((flower, index) => {
      return { flower, index };
    })
    .sort((a, b) => {
      const timeA = getFlowerCreatedAt(a.flower, a.index);
      const timeB = getFlowerCreatedAt(b.flower, b.index);

      if (timeA === timeB) {
        return a.index - b.index;
      }

      return browseState.sort === "oldest"
        ? timeA - timeB
        : timeB - timeA;
    })
    .map((item) => item.flower);
}

function getFlowerCreatedAt(flower, fallbackIndex) {
  if (Number.isFinite(flower.createdAt)) {
    return flower.createdAt;
  }

  return -fallbackIndex;
}

function matchesMood(flower) {
  return browseState.mood === "all" || flower.mood === browseState.mood;
}

function matchesKeyword(flower) {
  if (!browseState.keyword) {
    return true;
  }

  const note = String(flower.note || "").toLowerCase();
  return note.includes(browseState.keyword);
}

function renderFilterCount(visibleCount) {
  filterCount.textContent = `当前显示 ${visibleCount} / ${flowers.length} 条记录`;
}

function resetBrowseState() {
  browseState = { ...defaultBrowseState };
  moodFilter.value = defaultBrowseState.mood;
  searchInput.value = defaultBrowseState.keyword;
  sortSelect.value = defaultBrowseState.sort;
  editingFlowerId = "";
  renderFlowers({ animateList: true });
  showMessage("已经恢复显示全部花朵。", "success");
}

function renderFlowers(options = {}) {
  const visibleFlowers = getVisibleFlowers();

  if (options.animateList) {
    flowerList.classList.remove("is-refreshing");
    void flowerList.offsetWidth;
    flowerList.classList.add("is-refreshing");

    clearTimeout(listAnimationTimer);
    listAnimationTimer = setTimeout(() => {
      flowerList.classList.remove("is-refreshing");
    }, 320);
  }

  flowerList.innerHTML = "";
  flowerCount.textContent = `${flowers.length} 朵花`;
  clearButton.disabled = flowers.length === 0;
  renderFilterCount(visibleFlowers.length);

  if (flowers.length === 0) {
    flowerList.appendChild(createEmptyState(
      "garden",
      "🌱",
      "花园还在等第一朵花",
      "选一种今天的情绪，写下一句话，慢慢种下属于你的第一朵。"
    ));
    newFlowerId = "";
    updatedFlowerId = "";
    return;
  }

  if (visibleFlowers.length === 0) {
    flowerList.appendChild(createEmptyState(
      "results",
      "🔎",
      "没有找到符合条件的花",
      "试试换个情绪、关键词，或者点一下重置筛选，让花园重新展开。"
    ));
    newFlowerId = "";
    updatedFlowerId = "";
    return;
  }

  visibleFlowers.forEach((flower) => {
    const mood = moodMap[flower.mood] || moodMap.happy;
    const flowerQuote = flower.flowerQuote || flower.flowerLanguage || mood.copy;
    const isEditing = flower.id === editingFlowerId;
    const card = document.createElement("article");
    const cardClasses = ["flower-card", mood.className];

    if (flower.id === newFlowerId) {
      cardClasses.push("is-new");
    }

    if (flower.id === updatedFlowerId) {
      cardClasses.push("is-updated");
    }

    card.className = cardClasses.join(" ");
    card.dataset.emoji = mood.emoji;
    card.dataset.id = flower.id;
    card.innerHTML = `
      <div class="flower-top">
        <span class="flower-emoji" aria-hidden="true">${mood.emoji}</span>
        <span class="flower-date">创建于 ${flower.date || "未知日期"}</span>
      </div>
      <div class="flower-body">
        <span class="flower-label">今日情绪</span>
        <h3>${mood.name}</h3>
        ${isEditing
          ? '<textarea class="flower-edit-input" rows="3" maxlength="80"></textarea>'
          : '<p class="flower-note"></p>'}
        <p class="flower-copy"></p>
      </div>
      <div class="flower-card-actions">
        ${isEditing
          ? `
            <button class="save-edit-button" type="button">保存修改</button>
            <button class="cancel-edit-button" type="button">取消</button>
          `
          : `
            <button class="edit-flower-button" type="button">编辑这一朵</button>
            <button class="delete-flower-button" type="button">删除这一朵</button>
          `}
      </div>
    `;

    if (isEditing) {
      card.querySelector(".flower-edit-input").value = flower.note || "";
      card.querySelector(".save-edit-button").dataset.id = flower.id;
      card.querySelector(".cancel-edit-button").dataset.id = flower.id;
    } else {
      card.querySelector(".flower-note").textContent = flower.note;
      card.querySelector(".edit-flower-button").dataset.id = flower.id;
      card.querySelector(".delete-flower-button").dataset.id = flower.id;
    }

    card.querySelector(".flower-copy").textContent = flowerQuote;
    flowerList.appendChild(card);
  });

  newFlowerId = "";
  updatedFlowerId = "";
}

function createEmptyState(type, icon, title, text) {
  const empty = document.createElement("div");
  const iconElement = document.createElement("span");
  const titleElement = document.createElement("strong");
  const textElement = document.createElement("span");

  empty.className = `empty empty-${type}`;
  iconElement.className = "empty-icon";
  iconElement.textContent = icon;
  titleElement.textContent = title;
  textElement.textContent = text;

  empty.appendChild(iconElement);
  empty.appendChild(titleElement);
  empty.appendChild(textElement);

  return empty;
}

function startEditingFlower(flowerId) {
  const flower = flowers.find((item) => item.id === flowerId);

  if (!flower) {
    showMessage("没有找到这朵花，先刷新页面再试试看。", "error");
    return;
  }

  editingFlowerId = flowerId;
  renderFlowers();
  showMessage("可以在卡片里修改这朵花的心情文字。", "info");

  const editInput = flowerList.querySelector(".flower-edit-input");

  if (editInput) {
    editInput.focus();
  }
}

function cancelEditingFlower() {
  editingFlowerId = "";
  renderFlowers();
  showMessage("这朵花保持原来的样子。", "info");
}

function saveEditedFlower(flowerId) {
  const flower = flowers.find((item) => item.id === flowerId);

  if (!flower) {
    showMessage("没有找到这朵花，先刷新页面再试试看。", "error");
    return;
  }

  const editInput = flowerList.querySelector(".flower-edit-input");
  const nextNote = editInput ? editInput.value : "";
  const trimmedNote = nextNote.trim();

  if (!trimmedNote) {
    showMessage("心情文字不能为空，这朵花还保留着原来的内容。", "error");
    return;
  }

  flower.note = trimmedNote;
  editingFlowerId = "";
  updatedFlowerId = flowerId;
  const saved = saveFlowers();

  renderFlowers();
  renderStats();
  showMessage(
    saved
      ? "这朵花的心情文字已经更新好了。"
      : "页面里的心情文字已更新，但浏览器暂时没能保存这次修改。",
    saved ? "success" : "error"
  );
}

function deleteFlower(flowerId, flowerCard) {
  const shouldDelete = confirm("确定要删除这一朵花吗？这个操作不能撤销。");

  if (!shouldDelete) {
    showMessage("这朵花还在，已经帮你保留下来了。", "info");
    return;
  }

  if (flowerCard && !shouldReduceMotion()) {
    let deleted = false;
    const finishDelete = () => {
      if (deleted) {
        return;
      }

      deleted = true;
      removeFlowerById(flowerId);
    };

    flowerCard.classList.add("is-leaving");
    flowerCard.addEventListener("animationend", finishDelete, { once: true });
    setTimeout(finishDelete, 340);
    return;
  }

  removeFlowerById(flowerId);
}

function removeFlowerById(flowerId) {
  flowers = flowers.filter((flower) => flower.id !== flowerId);
  const saved = saveFlowers();

  renderFlowers();
  renderStats();
  showMessage(
    saved
      ? "已经删除这一朵花，花园记录也同步更新了。"
      : "页面里的花已删除，但浏览器暂时没能保存这次变化。",
    saved ? "success" : "error"
  );
}

function shouldReduceMotion() {
  return typeof window !== "undefined"
    && window.matchMedia
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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

function createDiaryText(savedFlowers) {
  const lines = [
    "Mood Garden 情绪花园日记",
    `导出日期：${formatDate(new Date())}`,
    `总花朵数量：${savedFlowers.length} 朵`,
    "",
    "记录列表",
    "--------------------"
  ];

  savedFlowers.forEach((flower, index) => {
    const mood = moodMap[flower.mood] || moodMap.happy;
    const flowerQuote = flower.flowerQuote || flower.flowerLanguage || mood.copy;

    lines.push(
      `${index + 1}. 创建日期：${flower.date || "未知日期"}`,
      `情绪：${mood.emoji} ${mood.name}`,
      `心情：${flower.note || "没有留下文字"}`,
      `随机花语：${flowerQuote}`,
      ""
    );
  });

  return lines.join("\n");
}

function createDiaryFileName(date) {
  return `mood-garden-diary-${formatDateForFileName(date)}.txt`;
}

function exportBackup() {
  const savedFlowers = loadFlowers();

  if (savedFlowers.length === 0) {
    showMessage("花园里还没有可以备份的花，先种下一朵吧。", "info");
    return;
  }

  const backupData = createBackupData(savedFlowers);
  const backupText = JSON.stringify(backupData, null, 2);
  const fileName = createBackupFileName(new Date());

  downloadTextFile(backupText, fileName, "application/json;charset=utf-8");
  showMessage("JSON 备份已经整理好了，正在为你下载。", "success");
}

function createBackupData(savedFlowers) {
  return {
    app: backupAppName,
    version: backupVersion,
    exportedAt: new Date().toISOString(),
    records: savedFlowers.map((flower) => {
      return { ...flower };
    })
  };
}

function createBackupFileName(date) {
  return `mood-garden-backup-${formatDateForFileName(date)}.json`;
}

function handleBackupFileChange(event) {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  readBackupFile(file)
    .then((fileText) => {
      const backupData = parseBackupJson(fileText);
      const records = getBackupRecords(backupData);

      validateBackupRecords(records);

      const importedFlowers = normalizeImportedFlowers(records);
      const importMode = importModeSelect.value === "replace" ? "replace" : "merge";

      if (!confirmImport(importedFlowers, importMode)) {
        showMessage("导入已取消，当前花园没有变化。", "info");
        return;
      }

      if (importMode === "replace") {
        const shouldReplace = confirm("再次确认：覆盖导入会替换当前花园里的所有记录，确定继续吗？");

        if (!shouldReplace) {
          showMessage("覆盖导入已取消，当前花园没有变化。", "info");
          return;
        }
      }

      importBackupRecords(importedFlowers, importMode);
    })
    .catch((error) => {
      console.warn("导入备份失败：", error);
      showMessage(error.message || "导入失败了，请换一个 Mood Garden 备份文件试试看。", "error");
    })
    .finally(() => {
      importBackupInput.value = "";
    });
}

function readBackupFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      resolve(String(reader.result || ""));
    });

    reader.addEventListener("error", () => {
      reject(new Error("读取备份文件失败，请重新选择文件试试看。"));
    });

    reader.readAsText(file, "utf-8");
  });
}

function parseBackupJson(fileText) {
  try {
    return JSON.parse(fileText.replace(/^\uFEFF/, ""));
  } catch (error) {
    throw new Error("这个文件不是合法的 JSON，请选择 Mood Garden 导出的备份文件。");
  }
}

function getBackupRecords(backupData) {
  if (Array.isArray(backupData)) {
    return backupData;
  }

  if (backupData && typeof backupData === "object" && Array.isArray(backupData.records)) {
    return backupData.records;
  }

  throw new Error("这个备份文件缺少 records 数组，暂时不能导入。");
}

function validateBackupRecords(records) {
  if (!Array.isArray(records)) {
    throw new Error("备份文件里的 records 不是数组，暂时不能导入。");
  }

  if (records.length === 0) {
    throw new Error("这个备份文件里没有花卡片记录，导入已取消。");
  }

  records.forEach((record, index) => {
    if (!record || typeof record !== "object") {
      throw new Error(`第 ${index + 1} 条记录格式不正确，导入已取消。`);
    }

    if (!moodMap[record.mood]) {
      throw new Error(`第 ${index + 1} 条记录的情绪类型不正确，导入已取消。`);
    }

    if (typeof record.note !== "string" || !record.note.trim()) {
      throw new Error(`第 ${index + 1} 条记录缺少心情文字，导入已取消。`);
    }
  });
}

function normalizeImportedFlowers(records) {
  const now = Date.now();

  return records.map((record, index) => {
    const mood = moodMap[record.mood];
    const createdAt = getImportedCreatedAt(record.createdAt, now - index);
    const date = typeof record.date === "string" && record.date.trim()
      ? record.date.trim()
      : formatDate(new Date(createdAt));

    return {
      id: getImportedFlowerId(record),
      mood: record.mood,
      note: record.note.trim(),
      flowerQuote: getImportedFlowerQuote(record, mood),
      createdAt,
      date
    };
  });
}

function getImportedFlowerId(record) {
  if (typeof record.id === "string" && record.id.trim()) {
    return record.id.trim();
  }

  return createFlowerId();
}

function getImportedCreatedAt(value, fallbackCreatedAt) {
  const createdAt = Number(value);
  return Number.isFinite(createdAt) ? createdAt : fallbackCreatedAt;
}

function getImportedFlowerQuote(record, mood) {
  const quote = record.flowerQuote || record.flowerLanguage;

  if (typeof quote === "string" && quote.trim()) {
    return quote.trim();
  }

  return mood.copy;
}

function getMoodSummary(records) {
  const summary = Object.keys(moodMap)
    .map((moodKey) => {
      const mood = moodMap[moodKey];
      const count = records.filter((record) => record.mood === moodKey).length;
      return count > 0 ? `${mood.name} ${count} 朵` : "";
    })
    .filter(Boolean);

  return summary.length > 0 ? summary.join("、") : "暂无情绪记录";
}

function confirmImport(importedFlowers, importMode) {
  const modeText = importMode === "replace" ? "覆盖导入" : "合并导入";
  const modeDescription = importMode === "replace"
    ? "覆盖导入会替换当前花园里的所有记录。"
    : "合并导入会把备份记录加入当前花园，并尽量避免重复 id。";
  const summary = getMoodSummary(importedFlowers);

  return confirm(
    `即将${modeText} ${importedFlowers.length} 条记录。\n\n` +
    `情绪分布：${summary}\n\n` +
    `${modeDescription}\n\n` +
    "确定继续吗？"
  );
}

function importBackupRecords(importedFlowers, importMode) {
  if (importMode === "replace") {
    flowers = ensureUniqueFlowerIds(importedFlowers, new Set());
  } else {
    const currentIds = new Set(flowers.map((flower) => flower.id));
    const safeImportedFlowers = ensureUniqueFlowerIds(importedFlowers, currentIds);

    flowers = [...safeImportedFlowers, ...flowers];
  }

  editingFlowerId = "";
  const saved = saveFlowers();

  renderFlowers();
  renderStats();
  showMessage(
    saved
      ? "备份导入成功，花园已经刷新好了。"
      : "备份内容已显示出来，但浏览器暂时没能保存这次导入。",
    saved ? "success" : "error"
  );
}

function ensureUniqueFlowerIds(records, usedIds) {
  return records.map((record) => {
    const nextRecord = { ...record };

    while (!nextRecord.id || usedIds.has(nextRecord.id)) {
      nextRecord.id = createFlowerId();
    }

    usedIds.add(nextRecord.id);
    return nextRecord;
  });
}

function downloadTextFile(text, fileName, fileType = "text/plain;charset=utf-8") {
  const fileParts = fileType.includes("application/json") ? [text] : ["\uFEFF", text];
  const file = new Blob(fileParts, {
    type: fileType
  });
  const link = document.createElement("a");
  const fileUrl = URL.createObjectURL(file);

  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(fileUrl);
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

function formatDateForFileName(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
