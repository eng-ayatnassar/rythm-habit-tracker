import { readChoice, readJSON, writeStorage } from "./storage.js";
import { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  BookOpen,
  Brain,
  Check,
  ChevronRight,
  Dumbbell,
  Flame,
  Footprints,
  Heart,
  Languages,
  Moon,
  Plus,
  Search,
  Sparkles,
  Sun,
  Trash2,
  X,
  Zap,
} from "lucide-react";

export const englishDictionary = {
  appName: "Rythm",
  appTagline: "Small rituals. Remarkable days.",
  languageName: "العربية",
  today: "Today",
  greeting: "Good morning",
  greetingName: "Maya",
  dateLabel: "Your daily rhythm",
  newHabit: "New Habit",
  dailyProgress: "Daily progress",
  progressMessage: "You are building momentum — keep going.",
  completed: "completed",
  currentStreak: "Current streak",
  days: "days",
  bestWeek: "Best week",
  habitsDone: "habits done",
  searchPlaceholder: "Search your habits...",
  all: "All",
  morning: "Morning",
  focus: "Focus",
  fitness: "Fitness",
  evening: "Evening",
  night: "Night",
  daily: "Daily",
  weekdays: "Weekdays",
  markComplete: "Mark complete",
  markIncomplete: "Mark incomplete",
  deleteHabit: "Delete habit",
  weeklyConsistency: "Weekly consistency",
  weeklyDescription: "Your last seven days, one calm step at a time.",
  legendComplete: "Completed",
  legendPartial: "Partial",
  legendEmpty: "Not completed",
  noHabitsTitle: "No habits here yet",
  noHabitsDescription: "Choose another category or create a new habit.",
  modalTitle: "Create a new habit",
  modalDescription: "Add one small ritual to your daily rhythm.",
  habitTitle: "Habit title",
  habitPlaceholder: "e.g. Read for 20 minutes",
  category: "Category",
  targetFrequency: "Target frequency",
  chooseIcon: "Choose an icon",
  cancel: "Cancel",
  createHabit: "Create habit",
  habitCreated: "Habit added to your rhythm",
  habitDeleted: "Habit removed",
  streakCelebration: "Beautiful work! Your streak is growing.",
  close: "Close",
  daySun: "Sun",
  dayMon: "Mon",
  dayTue: "Tue",
  dayWed: "Wed",
  dayThu: "Thu",
  dayFri: "Fri",
  daySat: "Sat",
  habitHydrate: "Morning hydration",
  habitWalk: "30-minute walk",
  habitRead: "Read 20 pages",
  habitMeditate: "Evening reflection",
  habitWorkout: "Strength workout",
  habitPlan: "Plan the top three",
  frequencyLabel: "Frequency",
  streakLabel: "Streak",
  weekLabel: "Last 7 days",
  footerNote: "Designed for sustainable consistency, not perfection.",
};

export const arabicDictionary = {
  appName: "إيقاع",
  appTagline: "طقوس صغيرة، أيام استثنائية.",
  languageName: "EN",
  today: "اليوم",
  greeting: "صباح الخير",
  greetingName: "مايا",
  dateLabel: "إيقاعك اليومي",
  newHabit: "عادة جديدة",
  dailyProgress: "تقدم اليوم",
  progressMessage: "أنت تبنين زخماً جميلاً — استمري.",
  completed: "مكتمل",
  currentStreak: "السلسلة الحالية",
  days: "أيام",
  bestWeek: "أفضل أسبوع",
  habitsDone: "عادات مكتملة",
  searchPlaceholder: "ابحثي في عاداتك...",
  all: "الكل",
  morning: "الصباح",
  focus: "التركيز",
  fitness: "اللياقة",
  evening: "المساء",
  night: "الليل",
  daily: "يومياً",
  weekdays: "أيام الأسبوع",
  markComplete: "تحديد كمكتملة",
  markIncomplete: "إلغاء الاكتمال",
  deleteHabit: "حذف العادة",
  weeklyConsistency: "استمرارية الأسبوع",
  weeklyDescription: "آخر سبعة أيام، خطوة هادئة في كل مرة.",
  legendComplete: "مكتمل",
  legendPartial: "جزئي",
  legendEmpty: "غير مكتمل",
  noHabitsTitle: "لا توجد عادات هنا بعد",
  noHabitsDescription: "اختاري فئة أخرى أو أضيفي عادة جديدة.",
  modalTitle: "إنشاء عادة جديدة",
  modalDescription: "أضيفي طقساً صغيراً إلى إيقاع يومك.",
  habitTitle: "اسم العادة",
  habitPlaceholder: "مثال: قراءة لمدة 20 دقيقة",
  category: "الفئة",
  targetFrequency: "معدل التكرار",
  chooseIcon: "اختيار الأيقونة",
  cancel: "إلغاء",
  createHabit: "إنشاء العادة",
  habitCreated: "تمت إضافة العادة إلى إيقاعك",
  habitDeleted: "تم حذف العادة",
  streakCelebration: "عمل رائع! سلسلتك تكبر.",
  close: "إغلاق",
  daySun: "أحد",
  dayMon: "إثنين",
  dayTue: "ثلاثاء",
  dayWed: "أربعاء",
  dayThu: "خميس",
  dayFri: "جمعة",
  daySat: "سبت",
  habitHydrate: "شرب الماء صباحاً",
  habitWalk: "المشي لمدة 30 دقيقة",
  habitRead: "قراءة 20 صفحة",
  habitMeditate: "تأمل المساء",
  habitWorkout: "تمارين القوة",
  habitPlan: "تحديد أهم ثلاث مهام",
  frequencyLabel: "التكرار",
  streakLabel: "السلسلة",
  weekLabel: "آخر 7 أيام",
  footerNote: "صُمم للاستمرارية المستدامة، لا للكمال.",
};

export const i18nTranslations = { en: englishDictionary, ar: arabicDictionary };
const STORAGE_KEYS = {
  HABITS: "rythm_habits_v1",
  LANGUAGE: "rythm_language_v1",
};
const CATEGORY_KEYS = ["all", "morning", "focus", "fitness", "evening"];
const WEEKDAY_KEYS = [
  "daySun",
  "dayMon",
  "dayTue",
  "dayWed",
  "dayThu",
  "dayFri",
  "daySat",
];
const ICON_OPTIONS = [
  "sparkles",
  "sun",
  "footprints",
  "book",
  "brain",
  "dumbbell",
  "moon",
  "heart",
];
const ICON_MAP = {
  sparkles: Sparkles,
  sun: Sun,
  footprints: Footprints,
  book: BookOpen,
  brain: Brain,
  dumbbell: Dumbbell,
  moon: Moon,
  heart: Heart,
};
const DEFAULT_HABITS = [
  {
    id: "hydrate",
    titleKey: "habitHydrate",
    category: "morning",
    frequency: "daily",
    iconName: "sun",
    streakCount: 8,
    isCompletedToday: true,
    weeklyHistory: [true, true, true, true, true, true, true],
  },
  {
    id: "walk",
    titleKey: "habitWalk",
    category: "fitness",
    frequency: "daily",
    iconName: "footprints",
    streakCount: 4,
    isCompletedToday: false,
    weeklyHistory: [true, false, true, true, false, true, false],
  },
  {
    id: "read",
    titleKey: "habitRead",
    category: "focus",
    frequency: "daily",
    iconName: "book",
    streakCount: 12,
    isCompletedToday: true,
    weeklyHistory: [true, true, true, true, true, true, true],
  },
  {
    id: "meditate",
    titleKey: "habitMeditate",
    category: "evening",
    frequency: "daily",
    iconName: "moon",
    streakCount: 6,
    isCompletedToday: false,
    weeklyHistory: [false, true, true, true, true, false, false],
  },
  {
    id: "workout",
    titleKey: "habitWorkout",
    category: "fitness",
    frequency: "weekdays",
    iconName: "dumbbell",
    streakCount: 3,
    isCompletedToday: false,
    weeklyHistory: [true, true, false, true, false, false, false],
  },
  {
    id: "plan",
    titleKey: "habitPlan",
    category: "morning",
    frequency: "weekdays",
    iconName: "brain",
    streakCount: 9,
    isCompletedToday: true,
    weeklyHistory: [true, true, true, true, true, false, true],
  },
];

function ProgressBar({ value, label }) {
  return (
    <div
      className="h-2.5 overflow-hidden rounded-full bg-slate-200"
      role="progressbar"
      aria-label={label}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
    >
      <div
        className="h-full rounded-full bg-mint transition-[width] duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function LanguageToggleBtn({ currentLang, onLanguageSwitch, t }) {
  return (
    <button
      type="button"
      onClick={() => onLanguageSwitch(currentLang === "en" ? "ar" : "en")}
      className="focus-ring inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slateDark shadow-sm transition hover:-translate-y-0.5 hover:shadow-card"
    >
      <Languages size={17} />
      <span>{t("languageName")}</span>
    </button>
  );
}

function HeaderBar({ currentLang, onLanguageSwitch, onOpenModal, t }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-ceramic/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t("appName")}
          className="focus-ring flex items-center gap-3 rounded-2xl text-start transition hover:-translate-y-0.5"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slateDark text-white shadow-card">
            <Zap size={22} />
          </span>
          <div>
            <div className="flex items-baseline gap-2">
              <h1 className="text-xl font-extrabold tracking-tight">
                {t("appName")}
              </h1>
              <span className="hidden text-xs text-slate-400 sm:inline">|</span>
              <span className="hidden text-sm font-semibold text-slate-500 sm:inline">
                {currentLang === "en"
                  ? arabicDictionary.appName
                  : englishDictionary.appName}
              </span>
            </div>
            <p className="hidden text-xs text-slate-500 md:block">
              {t("appTagline")}
            </p>
          </div>
        </button>
        <div className="flex items-center gap-2">
          <LanguageToggleBtn
            currentLang={currentLang}
            onLanguageSwitch={onLanguageSwitch}
            t={t}
          />
          <button
            type="button"
            onClick={onOpenModal}
            className="focus-ring inline-flex items-center gap-2 rounded-2xl bg-slateDark px-4 py-2.5 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">{t("newHabit")}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function DailyProgressBanner({
  completionRate,
  completedCount,
  totalCount,
  habitsList,
  t,
}) {
  const longestStreak = Math.max(
    0,
    ...habitsList.map((habit) => habit.streakCount),
  );
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-slateDark p-6 text-white shadow-card sm:p-8">
      <div className="absolute -end-16 -top-20 h-56 w-56 rounded-full bg-mint/20 blur-2xl" />
      <div className="relative grid gap-7 lg:grid-cols-[1fr_320px]">
        <div>
          <span className="text-xs font-bold uppercase tracking-[.18em] text-emerald-300">
            {t("dateLabel")}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t("greeting")}, {t("greetingName")}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
            {t("progressMessage")}
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:max-w-md">
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="flex items-center gap-2 text-amber-300">
                <Flame size={19} />
                <span className="text-xs font-semibold">
                  {t("currentStreak")}
                </span>
              </div>
              <strong className="mt-2 block text-2xl">
                {longestStreak}{" "}
                <small className="text-xs font-medium text-slate-300">
                  {t("days")}
                </small>
              </strong>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <div className="flex items-center gap-2 text-emerald-300">
                <BarChart3 size={19} />
                <span className="text-xs font-semibold">{t("habitsDone")}</span>
              </div>
              <strong className="mt-2 block text-2xl">
                {completedCount}/{totalCount}
              </strong>
            </div>
          </div>
        </div>
        <div className="self-center rounded-3xl bg-white p-6 text-slateDark">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                {t("dailyProgress")}
              </p>
              <strong className="mt-1 block text-4xl font-extrabold">
                {completionRate}%
              </strong>
            </div>
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-mint">
              <Check size={24} />
            </span>
          </div>
          <div className="mt-5">
            <ProgressBar value={completionRate} label={t("dailyProgress")} />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            {completedCount} {t("completed")}
          </p>
        </div>
      </div>
    </section>
  );
}

function CategoryFilterTabs({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  t,
}) {
  return (
    <section className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {CATEGORY_KEYS.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`focus-ring whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === category ? "bg-slateDark text-white shadow-card" : "border border-slate-200 bg-white text-slate-500 hover:text-slateDark"}`}
          >
            {t(category)}
          </button>
        ))}
      </div>
      <label className="flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm lg:w-80">
        <Search size={18} className="text-slate-400" />
        <input
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
          placeholder={t("searchPlaceholder")}
        />
      </label>
    </section>
  );
}

function HabitCard({ habit, isAnimating, onToggle, onDelete, t }) {
  const HabitIcon = ICON_MAP[habit.iconName] || Sparkles;
  const title = habit.customTitle || t(habit.titleKey);
  return (
    <article
      className={`surface group relative overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${isAnimating ? "habit-bounce" : ""}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 ${habit.isCompletedToday ? "bg-mint" : "bg-slate-200"}`}
      />
      <div className="flex items-start justify-between gap-4">
        <span
          className={`grid h-12 w-12 place-items-center rounded-2xl ${habit.isCompletedToday ? "bg-emerald-50 text-mint" : "bg-slate-100 text-slate-500"}`}
        >
          <HabitIcon size={23} />
        </span>
        <button
          type="button"
          onClick={() => onDelete(habit.id)}
          className="focus-ring rounded-xl p-2 text-slate-300 opacity-0 transition hover:bg-rose-50 hover:text-coral group-hover:opacity-100 focus:opacity-100"
          aria-label={t("deleteHabit")}
        >
          <Trash2 size={17} />
        </button>
      </div>
      <h3
        className={`mt-5 text-lg font-bold ${habit.isCompletedToday ? "text-slate-400 line-through decoration-emerald-300" : "text-slateDark"}`}
      >
        {title}
      </h3>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <span className="rounded-full bg-slate-100 px-2.5 py-1">
          {t(habit.category)}
        </span>
        <span>{t(habit.frequency)}</span>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2 text-amber-500">
          <Flame size={18} fill="currentColor" />
          <span className="text-sm font-bold">{habit.streakCount}</span>
          <span className="text-xs font-medium text-slate-400">
            {t("days")}
          </span>
        </div>
        <button
          type="button"
          onClick={() => onToggle(habit.id)}
          aria-label={
            habit.isCompletedToday ? t("markIncomplete") : t("markComplete")
          }
          className={`focus-ring grid h-11 w-11 place-items-center rounded-2xl border-2 transition ${habit.isCompletedToday ? "border-mint bg-mint text-white shadow-lg shadow-emerald-200" : "border-slate-200 bg-white text-slate-300 hover:border-mint hover:text-mint"}`}
        >
          <Check size={21} strokeWidth={3} />
        </button>
      </div>
    </article>
  );
}

function HabitGrid({ habitsList, animatingHabitId, onToggle, onDelete, t }) {
  if (!habitsList.length)
    return (
      <div className="surface mt-5 px-6 py-16 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-slate-100 text-slate-400">
          <Sparkles />
        </span>
        <h3 className="mt-4 font-bold">{t("noHabitsTitle")}</h3>
        <p className="mt-2 text-sm text-slate-500">
          {t("noHabitsDescription")}
        </p>
      </div>
    );
  return (
    <section className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {habitsList.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          isAnimating={animatingHabitId === habit.id}
          onToggle={onToggle}
          onDelete={onDelete}
          t={t}
        />
      ))}
    </section>
  );
}

function WeeklyConsistencyTracker({ habitsList, t }) {
  const dayKeys = useMemo(() => {
    const todayIndex = new Date().getDay();
    return Array.from(
      { length: 7 },
      (_, offset) => WEEKDAY_KEYS[(todayIndex - 6 + offset + 7) % 7],
    );
  }, []);
  return (
    <section className="surface mt-8 overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-extrabold">{t("weeklyConsistency")}</h2>
          <p className="mt-1 text-sm text-slate-500">
            {t("weeklyDescription")}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5">
            <i className="h-3 w-3 rounded bg-mint" />
            {t("legendComplete")}
          </span>
          <span className="flex items-center gap-1.5">
            <i className="h-3 w-3 rounded bg-emerald-200" />
            {t("legendPartial")}
          </span>
          <span className="flex items-center gap-1.5">
            <i className="h-3 w-3 rounded bg-slate-100" />
            {t("legendEmpty")}
          </span>
        </div>
      </div>
      <div className="overflow-x-auto p-6">
        <div className="min-w-[620px]">
          <div className="grid grid-cols-[190px_repeat(7,1fr)] gap-2">
            <span />
            <>
              {dayKeys.map((dayKey) => (
                <span
                  key={dayKey}
                  className="text-center text-[10px] font-bold uppercase text-slate-400"
                >
                  {t(dayKey)}
                </span>
              ))}
            </>
            {habitsList.map((habit) => (
              <div key={habit.id} className="contents">
                <span className="truncate py-2 text-sm font-semibold">
                  {habit.customTitle || t(habit.titleKey)}
                </span>
                {habit.weeklyHistory.map((complete, index) => (
                  <span
                    key={`${habit.id}-${index}`}
                    className={`mx-auto my-1 h-8 w-8 rounded-lg transition hover:scale-110 ${complete ? "bg-mint shadow-sm shadow-emerald-200" : "bg-slate-100"}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AddHabitModal({ isOpen, onClose, onCreate, t }) {
  const [formState, setFormState] = useState({
    title: "",
    category: "morning",
    frequency: "daily",
    iconName: "sparkles",
  });
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(formState);
    setFormState({
      title: "",
      category: "morning",
      frequency: "daily",
      iconName: "sparkles",
    });
  };
  return (
    <div
      className="modal-shell fixed inset-0 z-50 flex items-center justify-center p-4"
      data-open={isOpen}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
        aria-label={t("close")}
      />
      <div role="dialog" aria-modal="true" aria-label={t("modalTitle")} className="modal-panel relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-slate-200 p-6">
          <div>
            <h2 className="text-2xl font-extrabold">{t("modalTitle")}</h2>
            <p className="mt-2 text-sm text-slate-500">
              {t("modalDescription")}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="focus-ring rounded-xl p-2 text-slate-400 hover:bg-slate-100"
            aria-label={t("close")}
          >
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <label className="block">
            <span className="mb-2 block text-sm font-bold">
              {t("habitTitle")}
            </span>
            <input
              autoFocus
              required
              value={formState.title}
              onChange={(event) =>
                setFormState({ ...formState, title: event.target.value })
              }
              className="focus-ring w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              placeholder={t("habitPlaceholder")}
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <span className="mb-2 block text-sm font-bold">
                {t("category")}
              </span>
              <select
                value={formState.category}
                onChange={(event) =>
                  setFormState({ ...formState, category: event.target.value })
                }
                className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
              >
                {CATEGORY_KEYS.filter((item) => item !== "all").map((item) => (
                  <option key={item} value={item}>
                    {t(item)}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className="mb-2 block text-sm font-bold">
                {t("targetFrequency")}
              </span>
              <select
                value={formState.frequency}
                onChange={(event) =>
                  setFormState({ ...formState, frequency: event.target.value })
                }
                className="focus-ring w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
              >
                <option value="daily">{t("daily")}</option>
                <option value="weekdays">{t("weekdays")}</option>
              </select>
            </label>
          </div>
          <fieldset>
            <legend className="mb-3 text-sm font-bold">
              {t("chooseIcon")}
            </legend>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
              {ICON_OPTIONS.map((iconName) => {
                const IconOption = ICON_MAP[iconName];
                return (
                  <button
                    key={iconName}
                    type="button"
                    aria-label={`${t("chooseIcon")}: ${iconName}`}
                    aria-pressed={formState.iconName === iconName}
                    onClick={() => setFormState({ ...formState, iconName })}
                    className={`focus-ring grid aspect-square place-items-center rounded-2xl border transition ${formState.iconName === iconName ? "border-mint bg-emerald-50 text-mint" : "border-slate-200 text-slate-400 hover:text-slateDark"}`}
                  >
                    <IconOption size={20} />
                  </button>
                );
              })}
            </div>
          </fieldset>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="focus-ring rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600"
            >
              {t("cancel")}
            </button>
            <button
              type="submit"
              className="focus-ring rounded-2xl bg-slateDark px-6 py-3 text-sm font-bold text-white shadow-card"
            >
              {t("createHabit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function StreakCelebrationToast({ message, currentLang }) {
  if (!message) return null;
  return (
    <div
      role="status"
      lang={currentLang}
      dir={currentLang === "ar" ? "rtl" : "ltr"}
      className="toast-enter habit-toast fixed bottom-5 end-4 z-[60] rounded-2xl bg-slateDark px-5 py-4 text-sm font-semibold text-white shadow-2xl"
    >
      <span className="block text-center leading-relaxed" dir="auto">{message}</span>
    </div>
  );
}

export default function App() {
  const [currentLang, setCurrentLang] = useState(
    () => readChoice(STORAGE_KEYS.LANGUAGE, ["en", "ar"], "en"),
  );
  const [activeCategory, setActiveCategory] = useState("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [animatingHabitId, setAnimatingHabitId] = useState(null);
  const [habitsList, setHabitsList] = useState(() => {
    try {
      return (
        readJSON(STORAGE_KEYS.HABITS, DEFAULT_HABITS, (value) => Array.isArray(value) && value.every((habit) => habit && typeof habit.id === "string" && typeof habit.category === "string" && typeof habit.iconName === "string" && Number.isFinite(habit.streakCount) && Array.isArray(habit.weeklyHistory) && habit.weeklyHistory.length === 7 && habit.weeklyHistory.every((day) => typeof day === "boolean")))
      );
    } catch {
      return DEFAULT_HABITS;
    }
  });
  const t = (key) => i18nTranslations[currentLang][key] ?? key;

  useEffect(() => {
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
    writeStorage(STORAGE_KEYS.LANGUAGE, currentLang);
  }, [currentLang]);
  useEffect(() => {
    writeStorage(STORAGE_KEYS.HABITS, JSON.stringify(habitsList));
  }, [habitsList]);
  useEffect(() => {
    if (!toastMessage) return;
    const toastTimer = window.setTimeout(() => setToastMessage(null), 2800);
    return () => window.clearTimeout(toastTimer);
  }, [toastMessage]);

  const handleToggleHabitCompletion = (habitId) => {
    setHabitsList((currentHabits) =>
      currentHabits.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              isCompletedToday: !habit.isCompletedToday,
              streakCount: habit.isCompletedToday
                ? Math.max(0, habit.streakCount - 1)
                : habit.streakCount + 1,
              weeklyHistory: [
                ...habit.weeklyHistory.slice(0, 6),
                !habit.isCompletedToday,
              ],
            }
          : habit,
      ),
    );
    setAnimatingHabitId(habitId);
    window.setTimeout(() => setAnimatingHabitId(null), 500);
    const targetHabit = habitsList.find((habit) => habit.id === habitId);
    if (targetHabit && !targetHabit.isCompletedToday)
      setToastMessage("streakCelebration");
  };
  const handleCreateNewHabit = (newHabitData) => {
    const newHabit = {
      id: `habit-${Date.now()}`,
      titleKey: "",
      customTitle: newHabitData.title.trim(),
      category: newHabitData.category,
      frequency: newHabitData.frequency,
      iconName: newHabitData.iconName,
      streakCount: 0,
      isCompletedToday: false,
      weeklyHistory: [false, false, false, false, false, false, false],
    };
    setHabitsList((currentHabits) => [newHabit, ...currentHabits]);
    setIsAddModalOpen(false);
    setActiveCategory("all");
    setToastMessage("habitCreated");
  };
  const handleDeleteHabit = (habitId) => {
    setHabitsList((currentHabits) =>
      currentHabits.filter((habit) => habit.id !== habitId),
    );
    setToastMessage("habitDeleted");
  };
  const handleCategoryFilterChange = (categoryName) =>
    setActiveCategory(categoryName);
  const handleLanguageSwitch = (targetLang) => setCurrentLang(targetLang);
  const calculateDailyCompletionRate = () =>
    habitsList.length
      ? Math.round(
          (habitsList.filter((habit) => habit.isCompletedToday).length /
            habitsList.length) *
            100,
        )
      : 0;
  const filteredHabits = useMemo(
    () =>
      habitsList.filter((habit) => {
        const categoryMatches =
          activeCategory === "all" || habit.category === activeCategory;
        const translatedTitle = (
          habit.customTitle || t(habit.titleKey)
        ).toLocaleLowerCase(currentLang);
        return (
          categoryMatches &&
          translatedTitle.includes(
            searchQuery.trim().toLocaleLowerCase(currentLang),
          )
        );
      }),
    [habitsList, activeCategory, searchQuery, currentLang],
  );
  const completedCount = habitsList.filter(
    (habit) => habit.isCompletedToday,
  ).length;

  return (
    <div className="min-h-screen bg-ceramic">
      <HeaderBar
        currentLang={currentLang}
        onLanguageSwitch={handleLanguageSwitch}
        onOpenModal={() => setIsAddModalOpen(true)}
        t={t}
      />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <DailyProgressBanner
          completionRate={calculateDailyCompletionRate()}
          completedCount={completedCount}
          totalCount={habitsList.length}
          habitsList={habitsList}
          t={t}
        />
        <CategoryFilterTabs
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryFilterChange}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          t={t}
        />
        <HabitGrid
          habitsList={filteredHabits}
          animatingHabitId={animatingHabitId}
          onToggle={handleToggleHabitCompletion}
          onDelete={handleDeleteHabit}
          t={t}
        />
        <WeeklyConsistencyTracker habitsList={habitsList} t={t} />
        <footer className="py-10 text-center text-xs text-slate-400">
          <p>{t("footerNote")}</p>
          <a
            href="#"
            className="mt-3 inline-flex items-center gap-1 font-semibold text-slate-500 hover:text-slateDark"
          >
            <span>{t("today")}</span>
            <ChevronRight size={14} className="directional-icon" />
          </a>
        </footer>
      </main>
      <button
        type="button"
        onClick={() => setIsAddModalOpen(true)}
        className="focus-ring fixed bottom-5 end-5 z-20 inline-flex items-center gap-2 rounded-full bg-mint px-5 py-3.5 text-sm font-extrabold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-1 sm:hidden"
      >
        <Plus size={19} />
        <span>{t("newHabit")}</span>
      </button>
      <AddHabitModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onCreate={handleCreateNewHabit}
        t={t}
      />
      <StreakCelebrationToast message={toastMessage ? t(toastMessage) : null} currentLang={currentLang} />
    </div>
  );
}
