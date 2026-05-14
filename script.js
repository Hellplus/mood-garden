// Mood Garden uses a few plain objects as its tiny design system.
// When adding a new mood, keep these mood-based configs in sync.
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

const moodIconMap = {
  happy: ["🌻", "🌼", "☀️", "🌞", "✨"],
  calm: ["🌿", "🍃", "🪴", "🌱", "🫧"],
  anxious: ["🌧️", "☁️", "🌫️", "💧", "🌀"],
  tired: ["🌙", "🌌", "🕯️", "💤", "⭐"],
  excited: ["🌺", "🌈", "🔥", "🎈", "💫"]
};

const ICON_ANIMATION_MAP = {
  "🌻": "bloom",
  "🌼": "bloom",
  "🌺": "bloom",
  "☀️": "sun",
  "🌞": "sun",
  "✨": "twinkle",
  "⭐": "twinkle",
  "💫": "twinkle",
  "🌈": "rainbow",
  "🌿": "leaf",
  "🍃": "leaf",
  "🌱": "grow",
  "🪴": "grow",
  "🫧": "bubble",
  "🌧️": "rain",
  "☁️": "cloud",
  "🌫️": "cloud",
  "💧": "drop",
  "🌀": "swirl",
  "🌙": "moon",
  "🌌": "night",
  "🕯️": "candle",
  "💤": "sleep",
  "🔥": "fire",
  "🎈": "balloon",
  "🔎": "search",
  "🦋": "butterfly",
  "🚀": "rocket",
  "☕": "sleep",
  "😊": "bounce"
};

const HERO_COPY_POOLS = {
  happy: [
    {
      heroTitle: "把明亮留在今天",
      heroSubtitle: "小小的快乐，也值得被认真种下。"
    },
    {
      heroTitle: "今天有一点发光",
      heroSubtitle: "让这份好心情，在花园里慢慢停留。"
    },
    {
      heroTitle: "收藏一朵轻快的花",
      heroSubtitle: "快乐不必很大，被看见就很好。"
    },
    {
      heroTitle: "把笑意种进花园",
      heroSubtitle: "今天的温度，可以被一朵花记住。"
    }
  ],
  calm: [
    {
      heroTitle: "让心慢慢落地",
      heroSubtitle: "安静的一天，也有自己的花期。"
    },
    {
      heroTitle: "种下一点平静",
      heroSubtitle: "不用追赶，花会按自己的节奏长大。"
    },
    {
      heroTitle: "把呼吸放轻一点",
      heroSubtitle: "这一刻很小，也很值得被保存。"
    },
    {
      heroTitle: "给今天留一片安静",
      heroSubtitle: "慢慢写下，慢慢开花。"
    }
  ],
  anxious: [
    {
      heroTitle: "先种下一次呼吸",
      heroSubtitle: "不急着解决一切，先陪今天待一会儿。"
    },
    {
      heroTitle: "把紧张轻轻放下",
      heroSubtitle: "云会经过，花也会一点点长出来。"
    },
    {
      heroTitle: "给心事一个小花盆",
      heroSubtitle: "写下来，它就不必全挤在心里。"
    },
    {
      heroTitle: "今天先慢慢来",
      heroSubtitle: "把复杂的心情，种成一朵小花。"
    }
  ],
  tired: [
    {
      heroTitle: "把疲惫安放一下",
      heroSubtitle: "花也有慢慢蓄力的夜晚。"
    },
    {
      heroTitle: "今天可以轻一点",
      heroSubtitle: "不必用力开花，先好好停靠。"
    },
    {
      heroTitle: "给自己留一盏小灯",
      heroSubtitle: "累的时候，也可以被温柔记录。"
    },
    {
      heroTitle: "让花园替你慢下来",
      heroSubtitle: "休息不是空白，是重新长根。"
    }
  ],
  excited: [
    {
      heroTitle: "把期待种成花",
      heroSubtitle: "这份亮晶晶的心情，可以先被收藏。"
    },
    {
      heroTitle: "今天有新的风",
      heroSubtitle: "让热烈有地方停靠，也有名字。"
    },
    {
      heroTitle: "把闪光留给花园",
      heroSubtitle: "兴奋的时刻，也值得慢慢记下。"
    },
    {
      heroTitle: "让可能性开一朵花",
      heroSubtitle: "新的心动，正在轻轻靠近。"
    }
  ]
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

// Local storage keys and small safety limits. Keep these keys stable so old gardens still open.
const storageKey = "moodGardenFlowers";
const themeStorageKey = "moodGardenTheme";
const guideStorageKey = "moodGardenGuideSeen";
const appVersion = "2.5.0";
const maxMoodIconLength = 4;
const defaultIntensity = 3;
const minIntensity = 1;
const maxIntensity = 5;
const maxTagCount = 3;
const maxTagLength = 12;
const validThemes = ["light", "dark", "pink"];
const themeNames = {
  light: "浅色",
  dark: "深色",
  pink: "治愈粉"
};

// DOM references.
const moodOptions = document.querySelector("#moodOptions");
const noteInput = document.querySelector("#noteInput");
const intensitySelect = document.querySelector("#intensitySelect");
const tagsInput = document.querySelector("#tagsInput");
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
const analysisPanel = document.querySelector(".analysis-panel");
const analysisSummary = document.querySelector("#analysisSummary");
const insightOverview = document.querySelector("#insightOverview");
const insightSwitchButtons = document.querySelectorAll("[data-insight-view]");
const insightPanels = document.querySelectorAll("[data-insight-panel]");
const todayInsight = document.querySelector("#todayInsight");
const weekChart = document.querySelector("#weekChart");
const moodDistribution = document.querySelector("#moodDistribution");
const topMood = document.querySelector("#topMood");
const streakDays = document.querySelector("#streakDays");
const monthTrendChart = document.querySelector("#monthTrendChart");
const intensityAnalysis = document.querySelector("#intensityAnalysis");
const tagAnalysis = document.querySelector("#tagAnalysis");
const weekTagAnalysis = document.querySelector("#weekTagAnalysis");
const favoriteReview = document.querySelector("#favoriteReview");
const moodIntensityAnalysis = document.querySelector("#moodIntensityAnalysis");
const monthlyReview = document.querySelector("#monthlyReview");
const weeklyReview = document.querySelector("#weeklyReview");
const message = document.querySelector("#message");
const moodFilter = document.querySelector("#moodFilter");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const resetFiltersButton = document.querySelector("#resetFiltersButton");
const filterCount = document.querySelector("#filterCount");
const favoriteFilterButton = document.querySelector("#favoriteFilterButton");
const intensityFilter = document.querySelector("#intensityFilter");
const activeFilterSummary = document.querySelector("#activeFilterSummary");
const tagCloud = document.querySelector("#tagCloud");
const viewSwitchButtons = document.querySelectorAll("[data-garden-view]");
const calendarPanel = document.querySelector("#calendarPanel");
const calendarTitle = document.querySelector("#calendarTitle");
const calendarGrid = document.querySelector("#calendarGrid");
const calendarSelectedTitle = document.querySelector("#calendarSelectedTitle");
const calendarDayRecords = document.querySelector("#calendarDayRecords");
const prevMonthButton = document.querySelector("#prevMonthButton");
const nextMonthButton = document.querySelector("#nextMonthButton");
const todayMonthButton = document.querySelector("#todayMonthButton");
const themeSelect = document.querySelector("#themeSelect");
const toast = document.querySelector("#toast");
const heroMoodIcon = document.querySelector(".journal-flower");
const heroTitle = document.querySelector(".journal-title");
const heroSubtitle = document.querySelector(".journal-subtitle");
const mobileTabButtons = document.querySelectorAll("[data-mobile-tab]");
const mobileSections = document.querySelectorAll("[data-mobile-section]");
const mobileExportButton = document.querySelector("#mobileExportButton");
const mobileExportBackupButton = document.querySelector("#mobileExportBackupButton");
const mobileImportBackupButton = document.querySelector("#mobileImportBackupButton");
const mobileImportModeSelect = document.querySelector("#mobileImportModeSelect");
const mobileClearButton = document.querySelector("#mobileClearButton");
const onboardingGuide = document.querySelector("#onboardingGuide");
const guideCloseButton = document.querySelector("#guideCloseButton");
const flowerDetailOverlay = document.querySelector("#flowerDetailOverlay");
const detailCloseButton = document.querySelector("#detailCloseButton");
const detailCancelButton = document.querySelector("#detailCancelButton");
const detailSaveButton = document.querySelector("#detailSaveButton");
const detailMoodIcon = document.querySelector("#detailMoodIcon");
const detailDate = document.querySelector("#detailDate");
const detailMoodText = document.querySelector("#detailMoodText");
const detailQuote = document.querySelector("#detailQuote");
const detailNoteInput = document.querySelector("#detailNoteInput");
const detailIntensitySelect = document.querySelector("#detailIntensitySelect");
const detailTagsInput = document.querySelector("#detailTagsInput");
const detailDiaryInput = document.querySelector("#detailDiaryInput");
const detailFavoriteInput = document.querySelector("#detailFavoriteInput");

// App state.
const defaultBrowseState = {
  mood: "all",
  keyword: "",
  sort: "newest",
  tag: "",
  favorite: false,
  intensity: "all"
};

const mobileTabs = ["record", "garden", "analysis", "data"];
const gardenViews = ["list", "calendar"];
const insightViews = ["today", "week", "month"];

const backupAppName = "Mood Garden";
const backupVersion = appVersion;

let selectedMood = "happy";
let flowers = loadFlowers();
let editingFlowerId = "";
let browseState = { ...defaultBrowseState };
let gardenView = "list";
let activeInsightView = "week";
let calendarCurrentDate = getStartOfDay(new Date());
let selectedCalendarDateKey = getDateKey(new Date());
let toastTimer = 0;
let listAnimationTimer = 0;
let analysisAnimationTimer = 0;
let newFlowerId = "";
let updatedFlowerId = "";
let detailFlowerId = "";
const addedMissingData = addMissingFlowerData();

if (addedMissingData) {
  saveFlowers();
}

applyTheme(loadTheme());
initHeroMoodIcon();
setActiveMoodButton(selectedMood);
initMobileTabs();
initGardenViewSwitcher();
initInsightSwitcher();
updateAllViews();
initOnboardingGuide();
registerServiceWorker();

moodOptions.addEventListener("click", (event) => {
  const button = event.target.closest(".mood-button");

  if (!button) {
    return;
  }

  selectedMood = button.dataset.mood;
  setActiveMoodButton(selectedMood);
});

plantButton.addEventListener("click", () => {
  const note = noteInput.value.trim();

  if (!note) {
    showMessage("先给今天留下一句小小的心情，再把花种下吧。", "error");
    noteInput.focus();
    return;
  }

  const moodIcon = getRandomMoodIcon(selectedMood);
  const intensity = getSafeIntensity(intensitySelect ? intensitySelect.value : defaultIntensity);
  const tags = parseTagsInput(tagsInput ? tagsInput.value : "");
  const flower = {
    id: createFlowerId(),
    mood: selectedMood,
    moodIcon,
    note,
    intensity,
    tags,
    isFavorite: false,
    detailNote: "",
    flowerQuote: getRandomFlowerQuote(selectedMood),
    createdAt: Date.now(),
    date: formatDate(new Date())
  };

  flowers.unshift(flower);
  newFlowerId = flower.id;
  const saved = saveFlowers();
  updateAllViews({ animateAnalysis: true });
  updateHeroContent(moodIcon, selectedMood);

  noteInput.value = "";
  if (intensitySelect) {
    intensitySelect.value = String(defaultIntensity);
  }
  if (tagsInput) {
    tagsInput.value = "";
  }
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

if (favoriteFilterButton) {
  favoriteFilterButton.addEventListener("click", () => {
    browseState.favorite = !browseState.favorite;
    editingFlowerId = "";
    renderFlowers({ animateList: true });
  });
}

if (intensityFilter) {
  intensityFilter.addEventListener("change", () => {
    browseState.intensity = intensityFilter.value;
    editingFlowerId = "";
    renderFlowers({ animateList: true });
  });
}

if (tagCloud) {
  tagCloud.addEventListener("click", (event) => {
    const tagButton = event.target.closest(".tag-button");

    if (!tagButton) {
      return;
    }

    const nextTag = tagButton.dataset.tag || "";
    browseState.tag = browseState.tag === nextTag ? "" : nextTag;
    editingFlowerId = "";
    renderFlowers({ animateList: true });
  });
}

resetFiltersButton.addEventListener("click", () => {
  resetBrowseState();
});

if (prevMonthButton) {
  prevMonthButton.addEventListener("click", () => {
    changeCalendarMonth(-1);
  });
}

if (nextMonthButton) {
  nextMonthButton.addEventListener("click", () => {
    changeCalendarMonth(1);
  });
}

if (todayMonthButton) {
  todayMonthButton.addEventListener("click", () => {
    goToTodayInCalendar();
  });
}

if (calendarGrid) {
  calendarGrid.addEventListener("click", (event) => {
    const dayButton = event.target.closest(".calendar-day");

    if (!dayButton) {
      return;
    }

    selectCalendarDay(dayButton.dataset.dateKey);
  });
}

if (calendarDayRecords) {
  calendarDayRecords.addEventListener("click", (event) => {
    const detailButton = event.target.closest(".detail-flower-button");

    if (detailButton) {
      openFlowerDetail(detailButton.dataset.id);
    }
  });
}

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

if (mobileExportButton) {
  mobileExportButton.addEventListener("click", () => {
    exportButton.click();
  });
}

if (mobileExportBackupButton) {
  mobileExportBackupButton.addEventListener("click", () => {
    exportBackupButton.click();
  });
}

if (mobileImportBackupButton) {
  mobileImportBackupButton.addEventListener("click", () => {
    syncDesktopImportMode();
    importBackupInput.click();
  });
}

if (mobileImportModeSelect) {
  mobileImportModeSelect.addEventListener("change", () => {
    syncDesktopImportMode();
  });
}

importModeSelect.addEventListener("change", () => {
  syncMobileImportMode();
});

if (mobileClearButton) {
  mobileClearButton.addEventListener("click", () => {
    clearButton.click();
  });
}

if (guideCloseButton) {
  guideCloseButton.addEventListener("click", () => {
    closeOnboardingGuide();
  });
}

if (detailCloseButton) {
  detailCloseButton.addEventListener("click", () => {
    closeFlowerDetail();
  });
}

if (detailCancelButton) {
  detailCancelButton.addEventListener("click", () => {
    closeFlowerDetail();
  });
}

if (detailSaveButton) {
  detailSaveButton.addEventListener("click", () => {
    saveFlowerDetail();
  });
}

if (flowerDetailOverlay) {
  flowerDetailOverlay.addEventListener("click", (event) => {
    if (event.target === flowerDetailOverlay) {
      closeFlowerDetail();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && flowerDetailOverlay && !flowerDetailOverlay.hidden) {
    closeFlowerDetail();
  }
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
  closeFlowerDetail({ silent: true });
  const cleared = clearSavedFlowers();
  updateAllViews({ animateAnalysis: true });
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
  const detailButton = event.target.closest(".detail-flower-button");
  const favoriteButton = event.target.closest(".favorite-flower-button");
  const editButton = event.target.closest(".edit-flower-button");
  const deleteButton = event.target.closest(".delete-flower-button");

  if (detailButton) {
    openFlowerDetail(detailButton.dataset.id);
    return;
  }

  if (favoriteButton) {
    toggleFlowerFavorite(favoriteButton.dataset.id);
    return;
  }

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

// First-use guide uses its own localStorage key and never touches flower data.
function initOnboardingGuide() {
  if (!onboardingGuide || hasSeenOnboardingGuide()) {
    return;
  }

  onboardingGuide.hidden = false;

  if (guideCloseButton) {
    guideCloseButton.focus({ preventScroll: true });
  }
}

function hasSeenOnboardingGuide() {
  try {
    return localStorage.getItem(guideStorageKey) === "true";
  } catch (error) {
    console.warn("读取首次使用引导状态失败：", error);
    return false;
  }
}

function closeOnboardingGuide() {
  if (!onboardingGuide) {
    return;
  }

  onboardingGuide.hidden = true;

  try {
    localStorage.setItem(guideStorageKey, "true");
  } catch (error) {
    console.warn("保存首次使用引导状态失败：", error);
  }

  noteInput.focus();
}

// PWA helper. It is skipped when the project is opened directly with file://.
function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then((registration) => {
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;

          if (!newWorker) {
            return;
          }

          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              showMessage(`Mood Garden v${appVersion} 已经准备好，刷新页面后就能使用新版本。`, "info");
            }
          });
        });
      })
      .catch((error) => {
        console.warn("Service worker 注册失败：", error);
      });
  });
}

// Mobile tab helpers only change what is visible on small screens.
function initMobileTabs() {
  switchMobileTab("record", { scrollToTop: false });

  mobileTabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchMobileTab(button.dataset.mobileTab);
    });
  });
}

function switchMobileTab(tabName, options = {}) {
  if (!mobileTabs.includes(tabName)) {
    return;
  }

  if (flowerDetailOverlay && !flowerDetailOverlay.hidden) {
    closeFlowerDetail({ silent: true });
  }

  mobileTabButtons.forEach((button) => {
    const isActive = button.dataset.mobileTab === tabName;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  mobileSections.forEach((section) => {
    section.classList.toggle("is-mobile-active", section.dataset.mobileSection === tabName);
  });

  if (options.scrollToTop !== false && isMobileLayout()) {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion() ? "auto" : "smooth"
    });
  }
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 720px)").matches;
}

function initInsightSwitcher() {
  switchInsightView(activeInsightView);

  insightSwitchButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchInsightView(button.dataset.insightView);
    });
  });
}

function switchInsightView(viewName) {
  if (!insightViews.includes(viewName)) {
    return;
  }

  activeInsightView = viewName;

  insightSwitchButtons.forEach((button) => {
    const isActive = button.dataset.insightView === viewName;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  insightPanels.forEach((panel) => {
    const isActive = panel.dataset.insightPanel === viewName;

    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });
}

function syncMobileImportMode() {
  if (mobileImportModeSelect) {
    mobileImportModeSelect.value = importModeSelect.value;
  }
}

function syncDesktopImportMode() {
  if (mobileImportModeSelect) {
    importModeSelect.value = mobileImportModeSelect.value;
  }
}

// Rendering entry point: use this after data changes so all views stay in sync.
function updateAllViews(options = {}) {
  renderFlowers({
    animateList: Boolean(options.animateList)
  });
  renderStats();
  renderAnalysis({
    animate: Boolean(options.animateAnalysis)
  });
  try {
    renderCalendar();
  } catch (error) {
    console.warn("日历视图刷新失败：", error);
  }
}

// UI state helpers.
function setActiveMoodButton(moodKey) {
  document.querySelectorAll(".mood-button").forEach((button) => {
    const isActive = button.dataset.mood === moodKey;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

// Local storage helpers for flower records.
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

// Old data compatibility. Do not remove: older records may miss id or createdAt.
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

// Optional detail fields. Older records may not have these fields.
function getFlowerIntensity(flower) {
  return getSafeIntensity(flower ? flower.intensity : defaultIntensity);
}

function hasFlowerIntensity(flower) {
  const intensity = Number(flower ? flower.intensity : NaN);
  return Number.isInteger(intensity) && intensity >= minIntensity && intensity <= maxIntensity;
}

function getFlowerIntensityText(flower) {
  return hasFlowerIntensity(flower) ? `${getFlowerIntensity(flower)} / 5` : "未设置";
}

function getSafeIntensity(value) {
  const intensity = Number(value);

  if (Number.isInteger(intensity) && intensity >= minIntensity && intensity <= maxIntensity) {
    return intensity;
  }

  return defaultIntensity;
}

function getFlowerTags(flower) {
  if (!flower) {
    return [];
  }

  if (Array.isArray(flower.tags)) {
    return normalizeTags(flower.tags);
  }

  if (typeof flower.tags === "string") {
    return parseTagsInput(flower.tags);
  }

  return [];
}

function normalizeTags(tags) {
  const seen = new Set();
  const normalized = [];

  tags.forEach((tag) => {
    const safeTag = String(tag || "").trim().slice(0, maxTagLength);

    if (!safeTag || seen.has(safeTag)) {
      return;
    }

    seen.add(safeTag);
    normalized.push(safeTag);
  });

  return normalized.slice(0, maxTagCount);
}

function parseTagsInput(text) {
  if (typeof text !== "string") {
    return [];
  }

  return normalizeTags(text.split(/[\s,，、]+/));
}

function isFlowerFavorite(flower) {
  return Boolean(flower && flower.isFavorite === true);
}

function getFlowerDetailNote(flower) {
  return typeof flower?.detailNote === "string" ? flower.detailNote : "";
}

function getDetailNoteText(text) {
  return typeof text === "string" ? text.trim() : "";
}

// Browse, search, and sort helpers.
function getVisibleFlowers() {
  syncActiveTagFilter();

  let visibleFlowers = [...flowers];

  visibleFlowers = visibleFlowers.filter((flower) => {
    return matchesMood(flower)
      && matchesKeyword(flower)
      && matchesTag(flower)
      && matchesFavorite(flower)
      && matchesIntensity(flower);
  });

  return sortVisibleFlowers(visibleFlowers);
}

function syncActiveTagFilter() {
  if (!browseState.tag) {
    return;
  }

  const tagExists = flowers.some((flower) => getFlowerTags(flower).includes(browseState.tag));

  if (!tagExists) {
    browseState.tag = "";
  }
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

function matchesTag(flower) {
  if (!browseState.tag) {
    return true;
  }

  return getFlowerTags(flower).includes(browseState.tag);
}

function matchesFavorite(flower) {
  return !browseState.favorite || isFlowerFavorite(flower);
}

function matchesIntensity(flower) {
  if (browseState.intensity === "all") {
    return true;
  }

  return hasFlowerIntensity(flower) && String(getFlowerIntensity(flower)) === browseState.intensity;
}

function renderFilterCount(visibleCount) {
  filterCount.textContent = `当前显示 ${visibleCount} / ${flowers.length} 条记录`;
}

function renderFavoriteFilterButton() {
  if (!favoriteFilterButton) {
    return;
  }

  favoriteFilterButton.classList.toggle("active", browseState.favorite);
  favoriteFilterButton.setAttribute("aria-pressed", String(browseState.favorite));
  favoriteFilterButton.textContent = browseState.favorite ? "★ 正在看收藏" : "☆ 只看收藏";
}

function renderActiveFilters() {
  if (!activeFilterSummary) {
    return;
  }

  const activeFilters = [];

  if (browseState.mood !== "all" && moodMap[browseState.mood]) {
    activeFilters.push(`情绪：${moodMap[browseState.mood].name}`);
  }

  if (browseState.keyword) {
    activeFilters.push(`关键词：${browseState.keyword}`);
  }

  if (browseState.favorite) {
    activeFilters.push("收藏");
  }

  if (browseState.tag) {
    activeFilters.push(`标签：${browseState.tag}`);
  }

  if (browseState.intensity !== "all") {
    activeFilters.push(`强度：${browseState.intensity}`);
  }

  if (browseState.sort === "oldest") {
    activeFilters.push("排序：最早优先");
  }

  activeFilterSummary.classList.toggle("is-empty", activeFilters.length === 0);
  activeFilterSummary.textContent = activeFilters.length > 0
    ? `当前：${activeFilters.join(" · ")}`
    : "显示全部记录";
}

function getTagCounts(records) {
  const tagCounts = {};

  records.forEach((flower) => {
    getFlowerTags(flower).forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => {
      if (b.count === a.count) {
        return a.tag.localeCompare(b.tag, "zh-CN");
      }

      return b.count - a.count;
    });
}

function renderTagCloud() {
  if (!tagCloud) {
    return;
  }

  const tagCounts = getTagCounts(flowers);

  tagCloud.innerHTML = "";

  if (tagCounts.length === 0) {
    const empty = document.createElement("p");

    empty.className = "tag-empty";
    empty.textContent = "还没有标签。种花或在详情里加一点关键词，花园会慢慢长出标签。";
    tagCloud.appendChild(empty);
    return;
  }

  tagCounts.forEach(({ tag, count }) => {
    const button = document.createElement("button");
    const isActive = browseState.tag === tag;

    button.className = `tag-button${isActive ? " active" : ""}`;
    button.type = "button";
    button.dataset.tag = tag;
    button.setAttribute("aria-pressed", String(isActive));
    button.textContent = `#${tag} ${count}`;
    tagCloud.appendChild(button);
  });
}

function resetBrowseState() {
  browseState = { ...defaultBrowseState };
  moodFilter.value = defaultBrowseState.mood;
  searchInput.value = defaultBrowseState.keyword;
  sortSelect.value = defaultBrowseState.sort;

  if (intensityFilter) {
    intensityFilter.value = defaultBrowseState.intensity;
  }

  editingFlowerId = "";
  renderFlowers({ animateList: true });
  showMessage("已经恢复显示全部花朵。", "success");
}

// Garden view and calendar helpers.
function initGardenViewSwitcher() {
  switchGardenView(gardenView, { silent: true });

  viewSwitchButtons.forEach((button) => {
    button.addEventListener("click", () => {
      switchGardenView(button.dataset.gardenView);
    });
  });
}

function switchGardenView(viewName, options = {}) {
  if (!gardenViews.includes(viewName)) {
    return;
  }

  gardenView = viewName;

  viewSwitchButtons.forEach((button) => {
    const isActive = button.dataset.gardenView === gardenView;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  flowerList.hidden = gardenView !== "list";

  if (calendarPanel) {
    calendarPanel.hidden = gardenView !== "calendar";
  }

  if (gardenView === "calendar") {
    renderCalendar();
  }

  if (!options.silent) {
    showMessage(gardenView === "calendar" ? "已切换到日历视图。" : "已切换到列表视图。", "info");
  }
}

function renderCalendar() {
  if (!calendarPanel || !calendarGrid) {
    return;
  }

  const recordsByDate = groupFlowersByDate(flowers);
  const monthDays = getCalendarMonthDays(calendarCurrentDate);

  calendarTitle.textContent = formatCalendarMonth(calendarCurrentDate);
  calendarGrid.innerHTML = "";

  monthDays.forEach((day) => {
    calendarGrid.appendChild(createCalendarDayButton(day, recordsByDate));
  });

  renderCalendarDayRecords(selectedCalendarDateKey, recordsByDate);
}

function getCalendarMonthDays(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const mondayStartOffset = (firstDay.getDay() + 6) % 7;
  const calendarStart = new Date(year, month, 1 - mondayStartOffset);
  const days = [];

  for (let index = 0; index < 42; index += 1) {
    const dayDate = new Date(calendarStart);

    dayDate.setDate(calendarStart.getDate() + index);
    days.push({
      date: dayDate,
      dateKey: getDateKey(dayDate),
      dayNumber: dayDate.getDate(),
      isCurrentMonth: dayDate.getMonth() === month,
      isToday: getDateKey(dayDate) === getDateKey(new Date()),
      isSelected: getDateKey(dayDate) === selectedCalendarDateKey
    });
  }

  return days;
}

function groupFlowersByDate(records) {
  const grouped = {};

  records.forEach((flower) => {
    const dateKey = getFlowerDateKey(flower);

    if (!dateKey) {
      return;
    }

    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }

    grouped[dateKey].push(flower);
  });

  Object.keys(grouped).forEach((dateKey) => {
    grouped[dateKey] = sortFlowersByCreatedAt(grouped[dateKey]);
  });

  return grouped;
}

function createCalendarDayButton(day, recordsByDate) {
  const records = recordsByDate[day.dateKey] || [];
  const button = document.createElement("button");
  const dateNumber = document.createElement("span");
  const count = document.createElement("span");
  const icons = document.createElement("span");

  button.type = "button";
  button.dataset.dateKey = day.dateKey;
  button.className = [
    "calendar-day",
    day.isCurrentMonth ? "" : "is-outside-month",
    day.isToday ? "is-today" : "",
    day.isSelected ? "is-selected" : "",
    records.length > 0 ? "has-records" : ""
  ].filter(Boolean).join(" ");
  button.setAttribute("aria-label", `${formatCalendarFullDate(day.date)}，${records.length} 条记录`);

  dateNumber.className = "calendar-day-number";
  dateNumber.textContent = day.dayNumber;

  count.className = "calendar-day-count";
  count.textContent = records.length > 0 ? `${records.length} 朵` : "";

  icons.className = "calendar-day-icons";
  icons.innerHTML = getCalendarDayIcons(records);

  button.appendChild(dateNumber);
  button.appendChild(count);
  button.appendChild(icons);

  return button;
}

function renderCalendarDayRecords(dateKey, recordsByDate = groupFlowersByDate(flowers)) {
  if (!calendarSelectedTitle || !calendarDayRecords) {
    return;
  }

  const selectedDate = getDateFromKey(dateKey);
  const records = recordsByDate[dateKey] || [];

  calendarSelectedTitle.textContent = `${formatCalendarFullDate(selectedDate)}的花`;
  calendarDayRecords.innerHTML = "";

  if (records.length === 0) {
    calendarDayRecords.appendChild(createEmptyState(
      "calendar",
      "🌱",
      "这一天还没有花",
      "如果愿意，可以回到记录区，把这一天的心情轻轻种下。"
    ));
    return;
  }

  records.forEach((flower) => {
    calendarDayRecords.appendChild(createCalendarRecord(flower));
  });
}

function createCalendarRecord(flower) {
  const moodKey = moodMap[flower.mood] ? flower.mood : "happy";
  const mood = moodMap[moodKey];
  const moodIcon = getFlowerMoodIcon(flower, mood);
  const flowerQuote = flower.flowerQuote || flower.flowerLanguage || mood.copy;
  const record = document.createElement("article");
  const top = document.createElement("div");
  const moodText = document.createElement("span");
  const dateText = document.createElement("span");
  const note = document.createElement("p");
  const meta = document.createElement("div");
  const quote = document.createElement("p");
  const actions = document.createElement("div");
  const detailButton = document.createElement("button");

  record.className = "calendar-record";
  top.className = "calendar-record-top";
  moodText.className = "calendar-record-mood";
  moodText.innerHTML = `${getAnimatedIconHtml(moodIcon, moodKey, "icon-animate-light")} ${mood.name}`;
  dateText.className = "calendar-record-date";
  dateText.textContent = flower.date || "未知日期";
  note.className = "calendar-record-note";
  note.textContent = flower.note || "没有留下文字";
  meta.className = "calendar-record-meta";
  quote.className = "calendar-record-quote";
  quote.textContent = flowerQuote;
  actions.className = "calendar-record-actions";
  detailButton.className = "detail-flower-button";
  detailButton.type = "button";
  detailButton.dataset.id = flower.id;
  detailButton.textContent = "查看详情";

  top.appendChild(moodText);
  top.appendChild(dateText);
  record.appendChild(top);
  record.appendChild(note);
  renderFlowerMeta(meta, flower);
  record.appendChild(meta);
  record.appendChild(quote);
  actions.appendChild(detailButton);
  record.appendChild(actions);

  return record;
}

function getCalendarDayIcons(records) {
  return records.slice(0, 3).map((flower) => {
    const moodKey = moodMap[flower.mood] ? flower.mood : "happy";
    const mood = moodMap[moodKey];
    const moodIcon = getFlowerMoodIcon(flower, mood);

    return getAnimatedIconHtml(moodIcon, moodKey, "icon-animate-light");
  }).join("");
}

function selectCalendarDay(dateKey) {
  const selectedDate = getDateFromKey(dateKey);

  selectedCalendarDateKey = dateKey;
  calendarCurrentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  renderCalendar();
}

function changeCalendarMonth(offset) {
  calendarCurrentDate = new Date(
    calendarCurrentDate.getFullYear(),
    calendarCurrentDate.getMonth() + offset,
    1
  );
  selectedCalendarDateKey = getDateKey(calendarCurrentDate);
  renderCalendar();
}

function goToTodayInCalendar() {
  const today = getStartOfDay(new Date());

  calendarCurrentDate = new Date(today.getFullYear(), today.getMonth(), 1);
  selectedCalendarDateKey = getDateKey(today);
  renderCalendar();
}

function sortFlowersByCreatedAt(records) {
  return [...records].sort((a, b) => {
    return getFlowerCreatedAt(b, 0) - getFlowerCreatedAt(a, 0);
  });
}

function formatCalendarMonth(date) {
  return `${date.getFullYear()}年${date.getMonth() + 1}月`;
}

function formatCalendarFullDate(date) {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

// Flower list rendering and card actions.
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

  if (mobileClearButton) {
    mobileClearButton.disabled = flowers.length === 0;
  }

  renderFilterCount(visibleFlowers.length);
  renderFavoriteFilterButton();
  renderActiveFilters();
  renderTagCloud();

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
    const moodKey = moodMap[flower.mood] ? flower.mood : "happy";
    const mood = moodMap[moodKey];
    const moodIcon = getFlowerMoodIcon(flower, mood);
    const iconAnimationClass = getIconAnimationClass(moodIcon, moodKey);
    const flowerQuote = flower.flowerQuote || flower.flowerLanguage || mood.copy;
    const isFavorite = isFlowerFavorite(flower);
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
    card.dataset.emoji = moodIcon;
    card.dataset.id = flower.id;
    card.innerHTML = `
      <div class="flower-top">
        <span class="flower-emoji mood-icon mood-icon-${moodKey} ${iconAnimationClass}" aria-hidden="true"></span>
        <div class="flower-status">
          <button class="favorite-flower-button ${isFavorite ? "is-favorite" : ""}" type="button" aria-pressed="${String(isFavorite)}"></button>
          <span class="flower-date">创建于 ${flower.date || "未知日期"}</span>
        </div>
      </div>
      <div class="flower-body">
        <span class="flower-label">今日情绪</span>
        <h3>${mood.name}</h3>
        ${isEditing
          ? '<textarea class="flower-edit-input" rows="3" maxlength="80"></textarea>'
          : '<p class="flower-note"></p>'}
        <div class="flower-meta"></div>
        <p class="flower-copy"></p>
      </div>
      <div class="flower-card-actions">
        ${isEditing
          ? `
            <button class="save-edit-button" type="button">保存修改</button>
            <button class="cancel-edit-button" type="button">取消</button>
          `
          : `
            <button class="detail-flower-button" type="button">查看详情</button>
            <button class="edit-flower-button" type="button">编辑这一朵</button>
            <button class="delete-flower-button" type="button">删除这一朵</button>
          `}
      </div>
    `;
    card.querySelector(".flower-emoji").textContent = moodIcon;
    renderFlowerMeta(card.querySelector(".flower-meta"), flower);

    const favoriteButton = card.querySelector(".favorite-flower-button");
    favoriteButton.dataset.id = flower.id;
    favoriteButton.textContent = isFavorite ? "★ 已收藏" : "☆ 收藏";
    favoriteButton.setAttribute("aria-label", isFavorite ? "取消收藏这一朵" : "收藏这一朵");

    if (isEditing) {
      card.querySelector(".flower-edit-input").value = flower.note || "";
      card.querySelector(".save-edit-button").dataset.id = flower.id;
      card.querySelector(".cancel-edit-button").dataset.id = flower.id;
    } else {
      card.querySelector(".flower-note").textContent = flower.note;
      card.querySelector(".detail-flower-button").dataset.id = flower.id;
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
  const safeIcon = getSafeMoodIconText(icon, "🌱");

  empty.className = `empty empty-${type}`;
  iconElement.className = `empty-icon ${getIconAnimationClass(safeIcon)} icon-animate-light`;
  iconElement.textContent = safeIcon;
  titleElement.textContent = title;
  textElement.textContent = text;

  empty.appendChild(iconElement);
  empty.appendChild(titleElement);
  empty.appendChild(textElement);

  return empty;
}

function renderFlowerMeta(container, flower) {
  if (!container) {
    return;
  }

  const intensity = getFlowerIntensity(flower);
  const tags = getFlowerTags(flower);
  const hasDetailNote = Boolean(getFlowerDetailNote(flower));
  const metaItems = [
    hasFlowerIntensity(flower) ? `强度 ${intensity}/5` : "强度未设置"
  ];

  container.innerHTML = "";

  if (isFlowerFavorite(flower)) {
    metaItems.push("已收藏");
  }

  if (hasDetailNote) {
    metaItems.push("有补充日记");
  }

  metaItems.forEach((text) => {
    const chip = document.createElement("span");
    chip.className = text === "已收藏" ? "record-chip is-favorite" : "record-chip";
    chip.textContent = text;
    container.appendChild(chip);
  });

  tags.forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "tag-chip";
    chip.textContent = `#${tag}`;
    container.appendChild(chip);
  });
}

function openFlowerDetail(flowerId) {
  const flower = flowers.find((item) => item.id === flowerId);

  if (!flower || !flowerDetailOverlay) {
    showMessage("没有找到这朵花，先刷新页面再试试看。", "error");
    return;
  }

  detailFlowerId = flower.id;
  fillFlowerDetail(flower);
  flowerDetailOverlay.hidden = false;
  document.body.classList.add("has-detail-open");

  if (detailCloseButton) {
    detailCloseButton.focus();
  }
}

function fillFlowerDetail(flower) {
  const moodKey = moodMap[flower.mood] ? flower.mood : "happy";
  const mood = moodMap[moodKey];
  const moodIcon = getFlowerMoodIcon(flower, mood);
  const iconAnimationClass = getIconAnimationClass(moodIcon, moodKey);
  const flowerQuote = flower.flowerQuote || flower.flowerLanguage || mood.copy;

  if (detailMoodIcon) {
    detailMoodIcon.className = `detail-mood-icon mood-icon mood-icon-${moodKey} ${iconAnimationClass}`;
    detailMoodIcon.textContent = moodIcon;
  }

  if (detailDate) {
    detailDate.textContent = flower.date ? `创建于 ${flower.date}` : "创建日期未知";
  }

  if (detailMoodText) {
    detailMoodText.textContent = `${mood.name} · ${isFlowerFavorite(flower) ? "已收藏" : "未收藏"}`;
  }

  if (detailQuote) {
    detailQuote.textContent = `今日花语：${flowerQuote}`;
  }

  if (detailNoteInput) {
    detailNoteInput.value = flower.note || "";
  }

  if (detailIntensitySelect) {
    detailIntensitySelect.value = String(getFlowerIntensity(flower));
  }

  if (detailTagsInput) {
    detailTagsInput.value = getFlowerTags(flower).join(" ");
  }

  if (detailDiaryInput) {
    detailDiaryInput.value = getFlowerDetailNote(flower);
  }

  if (detailFavoriteInput) {
    detailFavoriteInput.checked = isFlowerFavorite(flower);
  }
}

function closeFlowerDetail(options = {}) {
  if (!flowerDetailOverlay) {
    return;
  }

  flowerDetailOverlay.hidden = true;
  detailFlowerId = "";
  document.body.classList.remove("has-detail-open");

  if (!options.silent) {
    showMessage("详情已关闭，这朵花保持原来的样子。", "info");
  }
}

function saveFlowerDetail() {
  const flower = flowers.find((item) => item.id === detailFlowerId);

  if (!flower) {
    showMessage("没有找到这朵花，先刷新页面再试试看。", "error");
    closeFlowerDetail({ silent: true });
    return;
  }

  const nextNote = detailNoteInput ? detailNoteInput.value.trim() : "";

  if (!nextNote) {
    showMessage("心情文字不能为空，这朵花还保留着原来的内容。", "error");
    if (detailNoteInput) {
      detailNoteInput.focus();
    }
    return;
  }

  flower.note = nextNote;
  flower.intensity = getSafeIntensity(detailIntensitySelect ? detailIntensitySelect.value : defaultIntensity);
  flower.tags = parseTagsInput(detailTagsInput ? detailTagsInput.value : "");
  flower.detailNote = getDetailNoteText(detailDiaryInput ? detailDiaryInput.value : "");
  flower.isFavorite = Boolean(detailFavoriteInput && detailFavoriteInput.checked);

  editingFlowerId = "";
  updatedFlowerId = flower.id;
  const saved = saveFlowers();

  closeFlowerDetail({ silent: true });
  updateAllViews({ animateAnalysis: true });
  showMessage(
    saved
      ? "这朵花的详情已经保存好了。"
      : "页面里的详情已更新，但浏览器暂时没能保存这次修改。",
    saved ? "success" : "error"
  );
}

function toggleFlowerFavorite(flowerId) {
  const flower = flowers.find((item) => item.id === flowerId);

  if (!flower) {
    showMessage("没有找到这朵花，先刷新页面再试试看。", "error");
    return;
  }

  flower.isFavorite = !isFlowerFavorite(flower);
  updatedFlowerId = flowerId;
  const saved = saveFlowers();

  updateAllViews({ animateAnalysis: true });
  showMessage(
    saved
      ? (flower.isFavorite ? "已经把这朵花收藏起来了。" : "已经取消收藏这一朵。")
      : "收藏状态已更新，但浏览器暂时没能保存这次修改。",
    saved ? "success" : "error"
  );
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

  updateAllViews({ animateAnalysis: true });
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
  if (detailFlowerId === flowerId) {
    closeFlowerDetail({ silent: true });
  }
  const saved = saveFlowers();

  updateAllViews({ animateAnalysis: true });
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

// Overview statistics.
function renderStats() {
  const savedFlowers = loadFlowers();

  totalCount.textContent = `共 ${savedFlowers.length} 朵花`;
  statsList.innerHTML = "";
  gardenNote.textContent = getGardenNote(savedFlowers);

  Object.keys(moodMap).forEach((moodKey) => {
    const mood = moodMap[moodKey];
    const count = savedFlowers.filter((flower) => flower.mood === moodKey).length;
    const item = document.createElement("div");
    const iconHtml = getAnimatedIconHtml(mood.emoji, moodKey, "stats-icon icon-animate-light");

    item.className = "stats-item";
    item.innerHTML = `
      <span class="stats-mood">${iconHtml} ${mood.name}</span>
      <span class="stats-number">${count}</span>
    `;

    statsList.appendChild(item);
  });
}

// V1.4 data analysis.
function renderAnalysis(options = {}) {
  const savedFlowers = loadFlowers();
  const recentDays = getRecentSevenDays();
  const weekCounts = getRecentSevenDayCounts(savedFlowers, recentDays);
  const weekDateKeys = new Set(recentDays.map((day) => day.key));
  const weekFlowers = savedFlowers.filter((flower) => {
    return weekDateKeys.has(getFlowerDateKey(flower));
  });
  const todayFlowers = getTodayRecords(savedFlowers);
  const monthFlowers = getCurrentMonthRecords(savedFlowers);
  const moodCounts = getMoodCounts(savedFlowers);
  const topMoods = getTopMoods(moodCounts);
  const weekTopMoods = getTopMoods(getMoodCounts(weekFlowers));
  const streak = getRecordStreak(savedFlowers);

  analysisSummary.textContent = createInsightSummary(savedFlowers, monthFlowers, topMoods);
  renderInsightOverview(savedFlowers, monthFlowers, topMoods);
  renderTodayInsights(todayFlowers);
  renderWeekChart(weekCounts, weekFlowers.length);
  renderTopMood(weekTopMoods, weekFlowers.length);
  renderWeekTagAnalysis(getTopTags(weekFlowers, 3));
  renderWeeklyReview(createWeeklyReview(weekFlowers.length, weekTopMoods));
  renderStreak(streak, savedFlowers.length);
  renderAdvancedAnalysis(savedFlowers, monthFlowers);
  if (options.animate) {
    animateAnalysisUpdate();
  }
}

function animateAnalysisUpdate() {
  if (!analysisPanel || shouldReduceMotion()) {
    return;
  }

  analysisPanel.classList.remove("is-updating");
  void analysisPanel.offsetWidth;
  analysisPanel.classList.add("is-updating");

  clearTimeout(analysisAnimationTimer);
  analysisAnimationTimer = setTimeout(() => {
    analysisPanel.classList.remove("is-updating");
  }, 560);
}

function getRecentSevenDays() {
  return getRecentDays(7);
}

function getRecentDays(dayCount) {
  const days = [];
  const today = getStartOfDay(new Date());

  for (let index = dayCount - 1; index >= 0; index -= 1) {
    const date = new Date(today);

    date.setDate(today.getDate() - index);
    days.push({
      key: getDateKey(date),
      label: `${date.getMonth() + 1}/${date.getDate()}`,
      date
    });
  }

  return days;
}

function getRecentSevenDayCounts(flowers, recentDays) {
  return getRecentDayCounts(flowers, recentDays);
}

function getRecentDayCounts(flowers, recentDays) {
  return recentDays.map((day) => {
    const count = flowers.filter((flower) => {
      return getFlowerDateKey(flower) === day.key;
    }).length;

    return { ...day, count };
  });
}

function getMoodCounts(records) {
  const counts = {};

  Object.keys(moodMap).forEach((moodKey) => {
    counts[moodKey] = 0;
  });

  records.forEach((record) => {
    if (moodMap[record.mood]) {
      counts[record.mood] += 1;
    }
  });

  return counts;
}

function getTopMoods(moodCounts) {
  const maxCount = Math.max(...Object.values(moodCounts));

  if (maxCount <= 0) {
    return [];
  }

  return Object.keys(moodCounts)
    .filter((moodKey) => moodCounts[moodKey] === maxCount)
    .map((moodKey) => {
      return {
        key: moodKey,
        count: moodCounts[moodKey],
        mood: moodMap[moodKey]
      };
    });
}

function getRecordStreak(records) {
  const dateKeys = records
    .map((record) => getFlowerDateKey(record))
    .filter(Boolean);
  const uniqueDateKeys = [...new Set(dateKeys)].sort();

  if (uniqueDateKeys.length === 0) {
    return {
      count: 0,
      latestKey: "",
      latestDate: null,
      isLatestToday: false
    };
  }

  const latestKey = uniqueDateKeys[uniqueDateKeys.length - 1];
  const latestDate = getDateFromKey(latestKey);
  const todayKey = getDateKey(new Date());
  const dateSet = new Set(uniqueDateKeys);
  let currentDate = new Date(latestDate);
  let count = 0;

  while (dateSet.has(getDateKey(currentDate))) {
    count += 1;
    currentDate.setDate(currentDate.getDate() - 1);
  }

  return {
    count,
    latestKey,
    latestDate,
    isLatestToday: latestKey === todayKey
  };
}

function getTodayRecords(records) {
  const todayKey = getDateKey(new Date());

  return records.filter((record) => getFlowerDateKey(record) === todayKey);
}

function createInsightSummary(records, monthRecords, topMoods) {
  if (records.length === 0) {
    return "花园还在等第一朵花。等你愿意记录时，这里会慢慢长出属于你的情绪洞察。";
  }

  if (records.length < 3) {
    return `目前花园里有 ${records.length} 朵花。再多记录几天，趋势会更清晰。`;
  }

  const topMoodText = getTopMoodText(topMoods);
  return `花园里已经有 ${records.length} 朵花，本月记录了 ${monthRecords.length} 朵，${topMoodText}出现得比较多。这里的洞察只基于你的记录做温柔回顾。`;
}

function renderInsightOverview(records, monthRecords, topMoods) {
  if (!insightOverview) {
    return;
  }

  const intensityStats = getIntensityStats(records);
  const topTags = getTopTags(records, 2);
  const tagText = topTags.length > 0
    ? topTags.map((item) => `#${item.tag}`).join("、")
    : "暂未形成";
  const intensityText = intensityStats.count > 0
    ? intensityStats.average.toFixed(1)
    : "未设置";
  const topMoodText = topMoods.length > 0 ? getTopMoodText(topMoods) : "慢慢记录";

  insightOverview.innerHTML = "";
  insightOverview.appendChild(createInsightOverviewCard("总记录", `${records.length} 朵`));
  insightOverview.appendChild(createInsightOverviewCard("本月记录", `${monthRecords.length} 朵`));
  insightOverview.appendChild(createInsightOverviewCard("常见情绪", topMoodText));
  insightOverview.appendChild(createInsightOverviewCard("平均强度", intensityText));
  insightOverview.appendChild(createInsightOverviewCard("常用标签", tagText));
}

function createInsightOverviewCard(label, value) {
  const card = document.createElement("div");
  const valueText = document.createElement("strong");
  const labelText = document.createElement("span");

  card.className = "insight-overview-card";
  valueText.textContent = value;
  labelText.textContent = label;

  card.appendChild(valueText);
  card.appendChild(labelText);
  return card;
}

function renderTodayInsights(todayRecords) {
  if (!todayInsight) {
    return;
  }

  todayInsight.innerHTML = "";

  if (todayRecords.length === 0) {
    todayInsight.appendChild(createAnalysisEmpty("今天还没有种下花。如果愿意，可以从一朵小小的记录开始。"));
    return;
  }

  const moodCounts = getMoodCounts(todayRecords);
  const topMoods = getTopMoods(moodCounts);
  const intensityStats = getIntensityStats(todayRecords);
  const metrics = document.createElement("div");
  const moodList = document.createElement("div");
  const note = document.createElement("p");

  metrics.className = "analysis-metric-grid";
  metrics.appendChild(createAnalysisMetric("今日记录", `${todayRecords.length} 朵`));
  metrics.appendChild(createAnalysisMetric("今日情绪", getTopMoodText(topMoods)));
  metrics.appendChild(createAnalysisMetric("今日强度", intensityStats.count > 0 ? intensityStats.average.toFixed(1) : "未设置"));

  moodList.className = "today-mood-list";
  Object.keys(moodMap).forEach((moodKey) => {
    const count = moodCounts[moodKey] || 0;

    if (count === 0) {
      return;
    }

    const chip = document.createElement("span");
    chip.className = "today-mood-chip";
    chip.innerHTML = `${getAnimatedIconHtml(moodMap[moodKey].emoji, moodKey, "icon-animate-light")} ${moodMap[moodKey].name} ${count}`;
    moodList.appendChild(chip);
  });

  note.className = "analysis-text";
  note.textContent = "这些只是今天留下的记录，不需要被解释成任何结论。";

  todayInsight.appendChild(metrics);
  todayInsight.appendChild(moodList);
  todayInsight.appendChild(note);
}

function renderWeekTagAnalysis(topTags) {
  renderTagRank(weekTagAnalysis, topTags, "这一周还没有明显标签。再多记录几次，关键词会慢慢浮现。");
}

function renderWeeklyReview(reviewText) {
  if (!weeklyReview) {
    return;
  }

  weeklyReview.textContent = reviewText;
}

function renderWeekChart(weekCounts, totalCountValue) {
  weekChart.innerHTML = "";

  if (totalCountValue === 0) {
    weekChart.appendChild(createAnalysisEmpty("花园还在等第一朵花。再多种几朵，最近 7 天的节奏就会慢慢出现。"));
    return;
  }

  const maxCount = Math.max(...weekCounts.map((day) => day.count), 1);

  weekCounts.forEach((day) => {
    const item = document.createElement("div");
    const count = document.createElement("span");
    const bar = document.createElement("div");
    const fill = document.createElement("span");
    const label = document.createElement("span");
    const height = day.count === 0 ? 0 : Math.max(8, Math.round((day.count / maxCount) * 100));

    item.className = "week-day";
    count.className = "week-count";
    count.textContent = `${day.count}朵`;
    bar.className = "week-bar";
    fill.className = day.count > 0 ? "week-bar-fill has-record" : "week-bar-fill";
    fill.style.setProperty("--bar-height", `${height}%`);
    label.className = "week-label";
    label.textContent = day.label;

    bar.appendChild(fill);
    item.appendChild(count);
    item.appendChild(bar);
    item.appendChild(label);
    weekChart.appendChild(item);
  });
}

function renderMoodDistribution(moodCounts, totalCountValue) {
  moodDistribution.innerHTML = "";

  if (totalCountValue === 0) {
    moodDistribution.appendChild(createAnalysisEmpty("等花园里有了记录，就能看到不同情绪出现的比例。"));
    return;
  }

  Object.keys(moodMap).forEach((moodKey) => {
    const mood = moodMap[moodKey];
    const count = moodCounts[moodKey] || 0;
    const ratio = totalCountValue === 0 ? 0 : Math.round((count / totalCountValue) * 100);
    const item = document.createElement("div");
    const label = document.createElement("span");
    const icon = document.createElement("span");
    const labelText = document.createElement("span");
    const ratioTrack = document.createElement("div");
    const ratioFill = document.createElement("span");
    const countText = document.createElement("span");

    item.className = "mood-distribution-item";
    label.className = "mood-distribution-label";
    icon.className = `${getIconAnimationClass(mood.emoji, moodKey)} distribution-icon icon-animate-light`;
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = mood.emoji;
    labelText.textContent = mood.name;
    ratioTrack.className = "mood-ratio";
    ratioFill.className = "mood-ratio-fill";
    ratioFill.style.setProperty("--ratio-width", `${ratio}%`);
    countText.className = "mood-distribution-count";
    countText.textContent = `${count} 朵`;

    label.appendChild(icon);
    label.appendChild(labelText);
    ratioTrack.appendChild(ratioFill);
    item.appendChild(label);
    item.appendChild(ratioTrack);
    item.appendChild(countText);
    moodDistribution.appendChild(item);
  });
}

function renderTopMood(topMoods, totalCountValue) {
  topMood.innerHTML = "";

  if (totalCountValue === 0 || topMoods.length === 0) {
    topMood.appendChild(createAnalysisEmpty("再多种几朵花，最常出现的情绪会在这里慢慢浮现。"));
    return;
  }

  const box = document.createElement("div");
  const big = document.createElement("strong");
  const text = document.createElement("p");
  const moodNames = topMoods.map((item) => item.mood.name).join("、");
  const moodEmojis = topMoods.map((item) => {
    return getAnimatedIconHtml(item.mood.emoji, item.key, "top-mood-icon icon-animate-light");
  }).join(" ");

  box.className = "top-mood-box";
  big.className = "analysis-big";
  big.innerHTML = `${moodEmojis} ${moodNames}`;
  text.className = "analysis-text";
  text.textContent = topMoods.length > 1
    ? `这些情绪并列出现最多，各有 ${topMoods[0].count} 朵。`
    : `这是目前花园里出现最多的情绪，一共有 ${topMoods[0].count} 朵。`;

  box.appendChild(big);
  box.appendChild(text);
  topMood.appendChild(box);
}

function renderStreak(streak, totalCountValue) {
  streakDays.innerHTML = "";

  if (totalCountValue === 0 || streak.count === 0) {
    streakDays.appendChild(createAnalysisEmpty("当你在不同日期种下花，这里会记录花园连续被照顾的天数。"));
    return;
  }

  const box = document.createElement("div");
  const big = document.createElement("strong");
  const text = document.createElement("p");
  const latestText = streak.latestDate ? formatShortDate(streak.latestDate) : "最近一次记录";

  box.className = "streak-box";
  big.className = "analysis-big";
  big.textContent = `${streak.count} 天`;
  text.className = "analysis-text";
  text.textContent = streak.isLatestToday
    ? "你最近一直在温柔地照看这座花园。"
    : `最近一次记录在 ${latestText}，那段连续记录已经被好好保存。`;

  box.appendChild(big);
  box.appendChild(text);
  streakDays.appendChild(box);
}

// V2.4/V2.5 advanced analysis. These views use saved records, not filtered results.
function renderAdvancedAnalysis(records, monthRecords = getCurrentMonthRecords(records)) {
  renderMonthTrend(getRecentDayCounts(records, getRecentDays(30)), records.length);
  renderMoodDistribution(getMoodCounts(monthRecords), monthRecords.length);
  renderIntensityAnalysis(getIntensityStats(monthRecords));
  renderTagAnalysis(getTopTags(monthRecords, 5));
  renderFavoriteReview(getFavoriteReview(monthRecords, 3));
  renderMoodIntensityAnalysis(getMoodIntensityStats(monthRecords));
  renderMonthlyReview(createMonthlyReview(records));
}

function renderMonthTrend(monthCounts, totalCountValue) {
  if (!monthTrendChart) {
    return;
  }

  monthTrendChart.innerHTML = "";

  if (totalCountValue === 0) {
    monthTrendChart.appendChild(createAnalysisEmpty("花园还没有记录。等有了几朵花，最近 30 天的节奏会在这里慢慢长出来。"));
    return;
  }

  const maxCount = Math.max(...monthCounts.map((day) => day.count), 1);

  monthCounts.forEach((day, index) => {
    const item = document.createElement("div");
    const count = document.createElement("span");
    const bar = document.createElement("div");
    const fill = document.createElement("span");
    const label = document.createElement("span");
    const height = day.count === 0 ? 0 : Math.max(8, Math.round((day.count / maxCount) * 100));
    const shouldShowLabel = index === 0 || index === monthCounts.length - 1 || index % 5 === 0;

    item.className = "month-trend-day";
    item.title = `${day.label}：${day.count} 朵`;
    count.className = "month-trend-count";
    count.textContent = day.count;
    bar.className = "month-trend-bar";
    fill.className = day.count > 0 ? "month-trend-fill has-record" : "month-trend-fill";
    fill.style.setProperty("--bar-height", `${height}%`);
    label.className = shouldShowLabel ? "month-trend-label" : "month-trend-label is-muted";
    label.textContent = day.label;

    bar.appendChild(fill);
    item.appendChild(count);
    item.appendChild(bar);
    item.appendChild(label);
    monthTrendChart.appendChild(item);
  });
}

function getIntensityStats(records) {
  const recordsWithIntensity = records.filter((record) => hasFlowerIntensity(record));
  const distribution = {};

  for (let level = minIntensity; level <= maxIntensity; level += 1) {
    distribution[level] = 0;
  }

  recordsWithIntensity.forEach((record) => {
    distribution[getFlowerIntensity(record)] += 1;
  });

  if (recordsWithIntensity.length === 0) {
    return {
      count: 0,
      average: 0,
      highestCount: 0,
      lowCount: 0,
      distribution
    };
  }

  const sum = recordsWithIntensity.reduce((total, record) => {
    return total + getFlowerIntensity(record);
  }, 0);

  return {
    count: recordsWithIntensity.length,
    average: Math.round((sum / recordsWithIntensity.length) * 10) / 10,
    highestCount: distribution[maxIntensity],
    lowCount: distribution[1] + distribution[2],
    distribution
  };
}

function renderIntensityAnalysis(stats) {
  if (!intensityAnalysis) {
    return;
  }

  intensityAnalysis.innerHTML = "";

  if (stats.count === 0) {
    intensityAnalysis.appendChild(createAnalysisEmpty("还没有可分析的心情强度。新记录设置强度后，这里会显示更细一点的回顾。"));
    return;
  }

  const metrics = document.createElement("div");
  const scale = document.createElement("div");
  const maxCount = Math.max(...Object.values(stats.distribution), 1);

  metrics.className = "analysis-metric-grid";
  metrics.appendChild(createAnalysisMetric("平均强度", stats.average.toFixed(1)));
  metrics.appendChild(createAnalysisMetric("最高强度", `${stats.highestCount} 条`));
  metrics.appendChild(createAnalysisMetric("低强度", `${stats.lowCount} 条`));
  scale.className = "intensity-scale";

  Object.entries(stats.distribution).forEach(([level, count]) => {
    scale.appendChild(createRatioRow({
      className: "intensity-row",
      labelClass: "intensity-label",
      trackClass: "intensity-track",
      fillClass: "intensity-fill",
      countClass: "intensity-count",
      label: `强度 ${level}`,
      countText: `${count} 条`,
      ratio: count === 0 ? 0 : Math.round((count / maxCount) * 100)
    }));
  });

  intensityAnalysis.appendChild(metrics);
  intensityAnalysis.appendChild(scale);
}

function getTopTags(records, limit) {
  return getTagCounts(records).slice(0, limit);
}

function renderTagAnalysis(topTags) {
  renderTagRank(tagAnalysis, topTags, "本月还没有常用标签。给记录加上关键词后，标签会在这里慢慢聚拢。");
}

function renderTagRank(container, topTags, emptyText) {
  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (topTags.length === 0) {
    container.appendChild(createAnalysisEmpty(emptyText));
    return;
  }

  const list = document.createElement("div");
  const maxCount = Math.max(...topTags.map((item) => item.count), 1);

  list.className = "tag-rank-list";
  topTags.forEach(({ tag, count }) => {
    list.appendChild(createRatioRow({
      className: "tag-rank-item",
      labelClass: "tag-rank-label",
      trackClass: "tag-rank-track",
      fillClass: "tag-rank-fill",
      countClass: "tag-rank-count",
      label: `#${tag}`,
      countText: `${count} 次`,
      ratio: Math.round((count / maxCount) * 100)
    }));
  });

  container.appendChild(list);
}

function getFavoriteReview(records, limit) {
  const favoriteRecords = sortFlowersByCreatedAt(records.filter((record) => isFlowerFavorite(record)));

  return {
    count: favoriteRecords.length,
    recent: favoriteRecords.slice(0, limit)
  };
}

function renderFavoriteReview(review) {
  if (!favoriteReview) {
    return;
  }

  favoriteReview.innerHTML = "";

  if (review.count === 0) {
    favoriteReview.appendChild(createAnalysisEmpty("还没有收藏记录。遇到想回头看的花，可以把它轻轻收藏起来。"));
    return;
  }

  const metrics = document.createElement("div");
  const list = document.createElement("div");

  metrics.className = "analysis-metric-grid";
  metrics.appendChild(createAnalysisMetric("收藏记录", `${review.count} 条`));
  metrics.appendChild(createAnalysisMetric("最近展示", `${review.recent.length} 条`));
  metrics.appendChild(createAnalysisMetric("保存方式", "本地"));
  list.className = "favorite-review-list";

  review.recent.forEach((flower) => {
    const mood = moodMap[flower.mood] || moodMap.happy;
    const item = document.createElement("div");
    const title = document.createElement("strong");
    const text = document.createElement("p");

    item.className = "favorite-review-item";
    title.textContent = `${getFlowerMoodIcon(flower, mood)} ${mood.name} · ${flower.date || "未知日期"}`;
    text.textContent = getShortText(flower.note || "没有留下文字", 42);

    item.appendChild(title);
    item.appendChild(text);
    list.appendChild(item);
  });

  favoriteReview.appendChild(metrics);
  favoriteReview.appendChild(list);
}

function getMoodIntensityStats(records) {
  const stats = {};

  Object.keys(moodMap).forEach((moodKey) => {
    stats[moodKey] = {
      moodKey,
      mood: moodMap[moodKey],
      count: 0,
      sum: 0,
      average: 0
    };
  });

  records.forEach((record) => {
    if (!moodMap[record.mood] || !hasFlowerIntensity(record)) {
      return;
    }

    stats[record.mood].count += 1;
    stats[record.mood].sum += getFlowerIntensity(record);
  });

  const items = Object.values(stats).map((item) => {
    return {
      ...item,
      average: item.count === 0 ? 0 : Math.round((item.sum / item.count) * 10) / 10
    };
  });
  const maxAverage = Math.max(...items.map((item) => item.average), 0);
  const topItems = maxAverage === 0
    ? []
    : items.filter((item) => item.average === maxAverage);

  return { items, topItems };
}

function renderMoodIntensityAnalysis(stats) {
  if (!moodIntensityAnalysis) {
    return;
  }

  moodIntensityAnalysis.innerHTML = "";

  const validItems = stats.items.filter((item) => item.count > 0);

  if (validItems.length === 0) {
    moodIntensityAnalysis.appendChild(createAnalysisEmpty("还没有足够的强度记录。记录再多一些后，情绪和强度的关系会更清晰。"));
    return;
  }

  const list = document.createElement("div");
  const note = document.createElement("p");

  list.className = "mood-intensity-list";
  validItems.forEach((item) => {
    const iconHtml = getAnimatedIconHtml(item.mood.emoji, item.moodKey, "distribution-icon icon-animate-light");

    list.appendChild(createRatioRow({
      className: "mood-intensity-row",
      labelClass: "mood-intensity-label",
      trackClass: "mood-intensity-track",
      fillClass: "mood-intensity-fill",
      countClass: "mood-intensity-count",
      label: `${iconHtml} ${item.mood.name}`,
      countText: `${item.average.toFixed(1)} / 5`,
      ratio: Math.round((item.average / maxIntensity) * 100),
      labelAsHtml: true
    }));
  });

  note.className = "analysis-text";
  note.textContent = `目前平均强度较高的是 ${getTopMoodText(stats.topItems)}。这只是基于记录的轻量回顾，不代表心理判断。`;

  moodIntensityAnalysis.appendChild(list);
  moodIntensityAnalysis.appendChild(note);
}

function getCurrentMonthRecords(records) {
  const today = new Date();
  const currentMonthKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;

  return records.filter((record) => {
    const dateKey = getFlowerDateKey(record);
    return dateKey.startsWith(currentMonthKey);
  });
}

function createMonthlyReview(records) {
  const monthRecords = getCurrentMonthRecords(records);

  if (monthRecords.length === 0) {
    return "这个月花园还比较安静。等你愿意记录时，月度回顾会在这里慢慢长出来。";
  }

  const moodText = getTopMoodText(getTopMoods(getMoodCounts(monthRecords)));
  const tagText = getTopTags(monthRecords, 2).map((item) => `#${item.tag}`).join("、") || "还没有明显标签";
  const intensityStats = getIntensityStats(monthRecords);
  const favoriteCount = monthRecords.filter((record) => isFlowerFavorite(record)).length;
  const intensityText = intensityStats.count > 0
    ? `平均强度约 ${intensityStats.average.toFixed(1)}`
    : "强度记录还不多";

  return `这个月你记录了 ${monthRecords.length} 朵花，${moodText}出现得比较多。常用标签是 ${tagText}，${intensityText}，其中有 ${favoriteCount} 条被你收藏。它们只是你亲手留下的记录，不做诊断，只帮你回看这段时间的节奏。`;
}

function renderMonthlyReview(reviewText) {
  if (!monthlyReview) {
    return;
  }

  monthlyReview.textContent = reviewText;
}

function createAnalysisMetric(label, value) {
  const item = document.createElement("div");
  const valueText = document.createElement("strong");
  const labelText = document.createElement("span");

  item.className = "analysis-metric";
  valueText.textContent = value;
  labelText.textContent = label;

  item.appendChild(valueText);
  item.appendChild(labelText);
  return item;
}

function createRatioRow(options) {
  const row = document.createElement("div");
  const label = document.createElement("span");
  const track = document.createElement("div");
  const fill = document.createElement("span");
  const count = document.createElement("span");

  row.className = options.className;
  label.className = options.labelClass;
  if (options.labelAsHtml) {
    label.innerHTML = options.label;
  } else {
    label.textContent = options.label;
  }
  track.className = options.trackClass;
  fill.className = options.fillClass;
  fill.style.setProperty("--ratio-width", `${options.ratio}%`);
  count.className = options.countClass;
  count.textContent = options.countText;

  track.appendChild(fill);
  row.appendChild(label);
  row.appendChild(track);
  row.appendChild(count);
  return row;
}

function getShortText(text, maxLength) {
  const safeText = String(text || "").trim();

  if (safeText.length <= maxLength) {
    return safeText;
  }

  return `${safeText.slice(0, maxLength)}...`;
}

function createAnalysisEmpty(text) {
  const empty = document.createElement("p");

  empty.className = "analysis-empty";
  empty.textContent = text;

  return empty;
}

function createWeeklyReview(weekTotal, weekTopMoods) {
  if (weekTotal === 0) {
    return "这 7 天花园比较安静。等你愿意的时候，再种下一朵也很好。";
  }

  if (weekTotal < 3) {
    return `这 7 天你记录了 ${weekTotal} 朵花。再多种几朵，花园就能长出更清晰的情绪轨迹。`;
  }

  const topMoodText = getTopMoodText(weekTopMoods);

  return `这一周你记录了 ${weekTotal} 朵花，${topMoodText}出现得比较多。你的花园正在慢慢积累属于自己的节奏。`;
}

function getTopMoodText(topMoods) {
  if (topMoods.length === 0) {
    return "不同情绪";
  }

  return topMoods.map((item) => item.mood.name).join("、");
}

function getFlowerDateKey(flower) {
  const createdAt = Number(flower.createdAt);

  if (Number.isFinite(createdAt)) {
    const createdDate = new Date(createdAt);

    if (!Number.isNaN(createdDate.getTime())) {
      return getDateKey(createdDate);
    }
  }

  const parsedDate = parseFlowerDateText(flower.date);
  return parsedDate ? getDateKey(parsedDate) : "";
}

function parseFlowerDateText(dateText) {
  if (typeof dateText !== "string" || !dateText.trim()) {
    return null;
  }

  const chineseMatch = dateText.match(/(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日/);
  const simpleMatch = dateText.match(/(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  const match = chineseMatch || simpleMatch;

  if (match) {
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }

  const parsed = new Date(dateText);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function getStartOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getDateKey(date) {
  const localDate = getStartOfDay(date);
  const year = localDate.getFullYear();
  const month = String(localDate.getMonth() + 1).padStart(2, "0");
  const day = String(localDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getDateFromKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);

  return new Date(year, month - 1, day);
}

function formatShortDate(date) {
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

// TXT diary export and JSON backup import/export.
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
    const moodIcon = getFlowerMoodIcon(flower, mood);
    const flowerQuote = flower.flowerQuote || flower.flowerLanguage || mood.copy;
    const tags = getFlowerTags(flower);
    const detailNote = getFlowerDetailNote(flower);

    lines.push(
      `${index + 1}. 创建日期：${flower.date || "未知日期"}`,
      `情绪：${moodIcon} ${mood.name}`,
      `心情：${flower.note || "没有留下文字"}`,
      `心情强度：${getFlowerIntensityText(flower)}`,
      `标签：${tags.length > 0 ? tags.join("、") : "无"}`,
      `收藏状态：${isFlowerFavorite(flower) ? "已收藏" : "未收藏"}`,
      `补充日记：${detailNote || "无"}`,
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
    const moodIcon = getImportedMoodIcon(record);

    const importedFlower = {
      id: getImportedFlowerId(record),
      mood: record.mood,
      note: record.note.trim(),
      flowerQuote: getImportedFlowerQuote(record, mood),
      createdAt,
      date
    };

    if (moodIcon) {
      importedFlower.moodIcon = moodIcon;
    }

    if (Object.prototype.hasOwnProperty.call(record, "intensity")) {
      importedFlower.intensity = getSafeIntensity(record.intensity);
    }

    if (Object.prototype.hasOwnProperty.call(record, "tags")) {
      importedFlower.tags = getFlowerTags(record);
    }

    if (Object.prototype.hasOwnProperty.call(record, "isFavorite")) {
      importedFlower.isFavorite = record.isFavorite === true;
    }

    if (Object.prototype.hasOwnProperty.call(record, "detailNote")) {
      importedFlower.detailNote = getDetailNoteText(record.detailNote);
    }

    return importedFlower;
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
  closeFlowerDetail({ silent: true });

  if (importMode === "replace") {
    flowers = ensureUniqueFlowerIds(importedFlowers, new Set());
  } else {
    const currentIds = new Set(flowers.map((flower) => flower.id));
    const safeImportedFlowers = ensureUniqueFlowerIds(importedFlowers, currentIds);

    flowers = [...safeImportedFlowers, ...flowers];
  }

  editingFlowerId = "";
  const saved = saveFlowers();

  updateAllViews({ animateAnalysis: true });
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

// Hero, mood icon, and copy helpers.
function initHeroMoodIcon() {
  const moodKeys = getHeroMoodKeys();
  const randomMood = getRandomItem(moodKeys) || "happy";
  const icon = getRandomMoodIcon(randomMood);

  updateHeroContent(icon, randomMood);
}

function updateHeroContent(icon, moodKey) {
  const safeMoodKey = getSafeHeroMoodKey(moodKey);

  updateHeroMoodIcon(icon, safeMoodKey);
  updateHeroCopy(safeMoodKey);
}

function updateHeroMoodIcon(icon, moodKey) {
  if (!heroMoodIcon) {
    return;
  }

  const safeMoodKey = moodMap[moodKey] ? moodKey : "happy";
  const displayIcon = getSafeMoodIconText(icon, moodMap[safeMoodKey].emoji);

  removeMoodIconClasses(heroMoodIcon);
  heroMoodIcon.classList.add("mood-icon", `mood-icon-${safeMoodKey}`, getIconAnimationClass(displayIcon, safeMoodKey));
  heroMoodIcon.textContent = displayIcon;
}

function updateHeroCopy(moodKey) {
  if (!heroTitle || !heroSubtitle) {
    return;
  }

  const copy = getRandomHeroCopy(moodKey);

  heroTitle.textContent = copy.heroTitle;
  heroSubtitle.textContent = copy.heroSubtitle;
  refreshHeroCopyAnimation();
}

function refreshHeroCopyAnimation() {
  [heroTitle, heroSubtitle].forEach((element) => {
    element.classList.remove("journal-copy-refresh");
    void element.offsetWidth;
    element.classList.add("journal-copy-refresh");
  });
}

function removeMoodIconClasses(element) {
  Object.keys(moodMap).forEach((moodKey) => {
    element.classList.remove(`mood-icon-${moodKey}`);
  });
  Object.values(ICON_ANIMATION_MAP).forEach((animationName) => {
    element.classList.remove(`icon-animate-${animationName}`);
  });
  element.classList.remove("icon-animate-soft");
}

function getRandomMoodIcon(mood) {
  const icons = moodIconMap[mood] || moodIconMap.happy;

  return getRandomItem(icons) || moodMap.happy.emoji;
}

function getRandomHeroCopy(mood) {
  const safeMoodKey = getSafeHeroMoodKey(mood);
  const copyPool = HERO_COPY_POOLS[safeMoodKey];

  return getRandomItem(copyPool) || HERO_COPY_POOLS.happy[0];
}

function getIconAnimationClass(icon, fallbackMood = "happy") {
  const normalizedIcon = getSafeMoodIconText(icon, "");
  const animationName = ICON_ANIMATION_MAP[normalizedIcon];

  if (animationName) {
    return `icon-animate-${animationName}`;
  }

  return "icon-animate-soft";
}

function getAnimatedIconHtml(icon, fallbackMood = "happy", extraClass = "") {
  const safeIcon = getSafeMoodIconText(icon, "");
  const animationClass = getIconAnimationClass(icon, fallbackMood);
  const className = `${animationClass} ${extraClass}`.trim();

  return `<span class="${className}" aria-hidden="true">${escapeHtml(safeIcon)}</span>`;
}

function getSafeMoodIconText(icon, fallbackIcon = "") {
  const iconText = typeof icon === "string" ? icon.trim() : "";

  if (!iconText) {
    return fallbackIcon;
  }

  return Array.from(iconText).length <= maxMoodIconLength ? iconText : fallbackIcon;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getHeroMoodKeys() {
  return Object.keys(moodIconMap).filter((moodKey) => {
    return moodMap[moodKey] && HERO_COPY_POOLS[moodKey]?.length > 0;
  });
}

function getSafeHeroMoodKey(moodKey) {
  if (moodMap[moodKey] && moodIconMap[moodKey]?.length > 0 && HERO_COPY_POOLS[moodKey]?.length > 0) {
    return moodKey;
  }

  return "happy";
}

function getFlowerMoodIcon(flower, mood) {
  const safeMoodIcon = getSafeMoodIconText(flower.moodIcon, "");

  if (safeMoodIcon) {
    return safeMoodIcon;
  }

  return mood.emoji;
}

function getImportedMoodIcon(record) {
  return getSafeMoodIconText(record.moodIcon, "");
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
