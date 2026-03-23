const quizData = [
    {
        q: "当关系结束时，你更像是？",
        a: [
            { text: "冰封的火山，外冷内热，所有的痛都在内部消化", p: "wolf", s: "bear" },
            { text: "改道的河流，安静地奔向新的海洋，不再回头", p: "cat", s: "bird" },
            { text: "被砍掉枝干的树，需要漫长的春天才能重新发芽", p: "whale", s: "deer" },
            { text: "被风吹散的云，形态改变了，但本质依然轻盈", p: "bird", s: "cat" }
        ]
    },
    {
        q: "当你深爱一个人时，你更倾向于如何表达这份感情？",
        a: [
            { text: "默默地为对方做好许多事，扫清障碍，但从不主动提起", p: "wolf", s: "bear" },
            { text: "将对方纳入自己未来的绝对规划中，成为自己生活的一部分", p: "bear", s: "cat" },
            { text: "与对方分享自己最隐秘的精神世界和别人看不到的风景", p: "whale", s: "deer" },
            { text: "创造只属于两个人的冒险，带对方体验绝对的自由", p: "bird", s: "wolf" }
        ]
    },
    {
        q: "哪种“背叛”会让你彻底放弃一段关系？",
        a: [
            { text: "利用你交付给他的软肋，反过来伤害你", p: "wolf", s: "deer" },
            { text: "在你最需要支撑时，选择明哲保身而抛弃你", p: "bear", s: "whale" },
            { text: "试图完全控制你，抹杀你原本的样子", p: "bird", s: "cat" },
            { text: "曾经相爱的默契消失，精神上已经无法再共鸣", p: "whale", s: "deer" }
        ]
    },
    {
        q: "在深夜独处时，你最常体验到的情绪底色是？",
        a: [
            { text: "一种轻微的下坠感，思考很多没有答案的哲学问题", p: "whale", s: "deer" },
            { text: "终于卸下铠甲的疲惫感，享受绝对安全的安静", p: "wolf", s: "bear" },
            { text: "想要逃离现状，去往毫无拘束的远方的冲动", p: "bird", s: "cat" },
            { text: "重新审视白天的对话，反思自己的边界是否被冒犯", p: "cat", s: "wolf" }
        ]
    },
    {
        q: "如果用一种自然现象来形容你的“自我防卫机制”，那是：",
        a: [
            { text: "突然降临的浓雾，让人看不清你，你也顺势隐藏", p: "deer", s: "whale" },
            { text: "尖锐的刺或坚硬的壳，谁靠近就刺伤谁", p: "wolf", s: "cat" },
            { text: "看起来温暖其实无法触摸的光，看似亲近实则遥远", p: "bird", s: "whale" },
            { text: "厚厚的积雪，把一切情绪和声音都掩埋冷藏", p: "bear", s: "wolf" }
        ]
    },
    {
        q: "当别人试图靠近你、了解你时，你心里的第一个声音是：",
        a: [
            { text: "“你真的能接纳全部、包括阴暗面的我吗？”", p: "whale", s: "bear" },
            { text: "“希望你懂分寸，不要随便越过我的安全线。”", p: "cat", s: "deer" },
            { text: "“你最好证明你的真诚，否则我会推开你。”", p: "wolf", s: "cat" },
            { text: "“我们可以同行一段路，但不要求永远。”", p: "bird", s: "deer" }
        ]
    },
    {
        q: "你觉得别人最容易误解你的一点是？",
        a: [
            { text: "以为我很理智冷酷，其实我只是害怕失控", p: "wolf", s: "cat" },
            { text: "以为我什么都不在乎，其实我把一切都看在眼里", p: "deer", s: "bird" },
            { text: "以为我很强大不需要照顾，其实我在死撑", p: "bear", s: "wolf" },
            { text: "以为我和谁都很近，其实极少有人真正走进我", p: "whale", s: "bird" }
        ]
    },
    {
        q: "当两个人发生激烈的争吵后，你希望的解决方式是？",
        a: [
            { text: "先各自躲回洞穴里冷静，然后再当做没发生过一样出来", p: "cat", s: "bear" },
            { text: "必须把话说透，哪怕把伤疤全揭开，也要清理干净", p: "wolf", s: "deer" },
            { text: "只要对方能给一个温暖的拥抱，其实一切都可以原谅", p: "whale", s: "bear" },
            { text: "觉得太累了，甚至会在那一刻闪过“算了吧”的念头", p: "bird", s: "cat" }
        ]
    },
    {
        q: "面对未知的将来，你的态度更像：",
        a: [
            { text: "随时准备迎战，在暗处磨亮自己的爪牙", p: "wolf", s: "cat" },
            { text: "随风而动，比起目的地，更在意沿途是否自由自在", p: "bird", s: "deer" },
            { text: "努力囤积足够多的事物，只求一个安稳的冬天", p: "bear", s: "whale" },
            { text: "保持敏感的嗅觉，小心翼翼地探试每一步", p: "deer", s: "cat" }
        ]
    },
    {
        q: "如果用一种温度或者触感来代表“家”，它应该是？",
        a: [
            { text: "绝对私密的、带有自己气息的柔软床铺", p: "cat", s: "bear" },
            { text: "虽然寒冷，但可以自由翱翔、没有天花板的无尽天空", p: "bird", s: "deer" },
            { text: "幽深但能包裹住一切声音的温暖水流", p: "whale", s: "bear" },
            { text: "燃烧着的篝火，能驱散深夜的所有寒意和危险", p: "wolf", s: "whale" }
        ]
    },
    {
        q: "大多数的社交场合对你来说，更像是在：",
        a: [
            { text: "消耗自己本来就为数不多的电量，盼着随时找借口早退", p: "cat", s: "bear" },
            { text: "穿上一层叫做“体面”的潜水服，勉强在人群里呼吸", p: "whale", s: "wolf" },
            { text: "戴上雷达，时刻紧绷着观察周围的气氛和别人的眼色", p: "deer", s: "wolf" },
            { text: "像一阵风一样经过，可以打个招呼，但不想久留", p: "bird", s: "cat" }
        ]
    },
    {
        q: "这辈子如果只能被一个人深爱，你最希望他拥有什么特质？",
        a: [
            { text: "绝对的忠诚，永远将你放在第一优先级的偏爱", p: "wolf", s: "bear" },
            { text: "能够读懂你那些没有说出口的欲言又止", p: "whale", s: "deer" },
            { text: "和你一样有趣，愿意陪你一起随时私奔的灵魂", p: "bird", s: "cat" },
            { text: "边界清晰，懂得欣赏你的独立，绝不逾矩的尊重", p: "cat", s: "deer" }
        ]
    },
    {
        q: "当过往的创伤被重新提起时，你会：",
        a: [
            { text: "像什么都没发生过一样笑着敷衍，但心里又裂开一道口子", p: "deer", s: "bird" },
            { text: "无声地沉没到海底，给自己几天时间慢慢自愈", p: "whale", s: "bear" },
            { text: "迅速竖起全身的防备，本能地切断继续探讨的话题", p: "cat", s: "wolf" },
            { text: "假装自己早就已经痊愈，甚至能用这件事来开玩笑", p: "wolf", s: "cat" }
        ]
    },
    {
        q: "在一段完美的朋友关系中，你通常是哪个角色？",
        a: [
            { text: "平时消失不见，但对方有难会第一个冲出来的护卫者", p: "wolf", s: "bear" },
            { text: "绝对的情绪垃圾桶，永远能提供最温柔的回应", p: "whale", s: "deer" },
            { text: "独立、偶尔提供犀利视角的清醒旁观者", p: "cat", s: "bird" },
            { text: "总能找到新奇点子，带大家去探索有趣事物的向导", p: "bird", s: "wolf" }
        ]
    },
    {
        q: "如果你可以选择一种方式度过漫长的人生，你希望是：",
        a: [
            { text: "找到一个可以背靠背信任的同类，隐居在只有两人的世界", p: "wolf", s: "bear" },
            { text: "保持随时起飞的状态，不停留，也不被任何人绊住", p: "bird", s: "cat" },
            { text: "在一个能包容我所有奇怪想法的海洋里，静静缓慢游荡", p: "whale", s: "deer" },
            { text: "有一个不大但绝对属于自己的院子，只让极少数喜欢的人敲门", p: "cat", s: "bear" }
        ]
    }
];

const resultsData = {
    wolf: {
        title: "孤岛上的狼",
        icon: "🐺",
        tagline: "深情隐藏在防备之下的守护者",
        desc: "你习惯保持防备，其实内心的情感非常炽热，只是太难轻易把自己交出去。你有着极强的保护欲，但这份柔软和忠诚，只会留给那个用无尽耐心向你证明过安全感的人。",
        pros: "极其专注、忠诚且充满力量感、洞察力强",
        hidden: "表面看似强大独立，其实比大部分人都渴望一种不带任何条件偏爱的坚定守护。",
        match: "情绪足够稳定，永远不会在半途抛弃你的人。",
        shareText: "我是孤岛上的狼🐺，外表竖起防备，内心最柔软。快来测测你的内在动物塑！"
    },
    whale: {
        title: "深渊里的鲸",
        icon: "🐋",
        tagline: "温柔包容却孤独发出52赫兹频率",
        desc: "你身上有着如海洋般温柔、包容的底色，愿意去倾听和接纳别人的情绪。但你内心的精神世界太过丰富与深邃，就像那只发着52赫兹频率的鲸鱼，常常在这热闹的世界里感到一种无人共鸣的孤独。",
        pros: "极强的共情力、深情且温柔、内心世界丰富",
        hidden: "因为太能共感别人的痛苦，所以常常在安静的时候忽然觉得一阵疲惫和内耗。",
        match: "能读懂你不合群的浪漫，愿意陪你一起听海底心跳的人。",
        shareText: "我是深渊里的鲸🐋，在喧嚣中保留一份纯粹的孤独。快来测测你的内在动物塑！"
    },
    deer: {
        title: "迷雾中的鹿",
        icon: "🦌",
        tagline: "清醒敏锐，带着空灵气场",
        desc: "你极其敏感，对周围环境和情绪的变化有着雷达一般的感知力。这份敏感赋予了你极度清醒的头脑和与生俱来的灵气。你在人群中总是保持着得体友善但警觉的距离，任何试图强行冲撞你边界的行为，都会让你受惊逃亡。",
        pros: "直觉极准、带着不染世俗的灵气、清醒通透",
        hidden: "太容易看透人性的自私与伪装，因此总是维持着很难消除的戒备心和疏离感。",
        match: "能小心翼翼呵护你的敏感，不经意间送出温暖的人。",
        shareText: "我是迷雾中的鹿🦌，敏感清醒且极具灵气。快来测测你的内在动物塑！"
    },
    cat: {
        title: "屋檐下的猫",
        icon: "🐱",
        tagline: "傲娇且注重边界的独立灵魂",
        desc: "你是一个把“边界感”刻在骨子里的人。你极度需要私人空间和自由，讨厌一切黏腻和缺乏分寸感的人际交往。你在外人看来可能冷淡傲娇、毫无破绽，但事实上，面对那个让你彻底卸下防备的人，你会毫无保留地展露柔软的肚皮。",
        pros: "独立清醒、审美在线、绝不轻易妥协",
        hidden: "用高冷来筛选掉不值得的人，真正被你接纳的人会看到你笨拙又可爱的爱意。",
        match: "跟你一样懂分寸，欣赏你的独立并尊重你不接电话自由的人。",
        shareText: "我是屋檐下的猫🐱，高冷伪装下是一颗只要偏爱的心。快来测测你的内在动物塑！"
    },
    bird: {
        title: "追风的候鸟",
        icon: "🕊️",
        tagline: "内核向往绝对自由的风之子",
        desc: "自由是你生命中最重要的命题。任何沉重、令你感到窒息的关系或是责任，都会让你下意识地想要逃跑。对世界永远充满好奇，永远在探索未知的风景。即使你愿意为了某个人暂时停留，但如果你不能感受到自由呼吸的空气，你依然会再次起飞。",
        pros: "无拘无束、思想极其开放自由、乐观洒脱",
        hidden: "看似什么都不在乎，其实是因为比谁都清楚一切终将散场，不如只记住飞翔的时刻。",
        match: "能陪你随时“私奔”，把世界当成巨大游乐场的人。",
        shareText: "我是追风的候鸟🕊️，生来属于天空和绝不妥协的自由。快来测测你的内在动物塑！"
    },
    bear: {
        title: "冬眠的熊",
        icon: "🐻",
        tagline: "外表钝感内心渴望温暖巢穴",
        desc: "在外人看来你情绪极其稳定，有一种迟钝但非常强大的力量感，似乎没有什么能轻易将你击倒。但实际上，你内心却像个渴望糖果和拥抱的小孩，极其贪恋温暖、安全和不被打扰的宁静。你理想中的生活，不过是和一个靠谱的人一起舒舒服服地“冬眠”。",
        pros: "充满力量感、稳重踏实、有着绝对包容力",
        hidden: "虽然看起来很结实不需要照顾，其实最想要的只是一句“有我在，你什么都不用管”。",
        match: "能穿透你的坚强外壳，看见你心里的那个小孩并给予拥抱的人。",
        shareText: "我是冬眠的熊🐻，看似强大其实只想要一个温暖的安全屋。快来测测你的内在动物塑！"
    }
};

// State
let currentQuestionIndex = 0;
let userSelections = new Array(quizData.length).fill(null);
let userName = "";

// DOM Elements
const startPage = document.getElementById('start-page');
const quizPage = document.getElementById('quiz-page');
const resultPage = document.getElementById('result-page');

const nameInput = document.getElementById('user-name');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const copyBtn = document.getElementById('copy-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressNum = document.getElementById('current-q-num');
const progressBar = document.getElementById('progress-bar');
const resultContent = document.getElementById('result-content');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

// Events
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
copyBtn.addEventListener('click', copyResult);
if (nextBtn) nextBtn.addEventListener('click', handleNext);
if (prevBtn) prevBtn.addEventListener('click', handlePrev);

function startQuiz() {
    userName = nameInput.value.trim();
    startPage.classList.remove('active');
    quizPage.classList.add('active');
    
    // Reset state
    currentQuestionIndex = 0;
    userSelections = new Array(quizData.length).fill(null);
    
    loadQuestion();
}

function loadQuestion() {
    const question = quizData[currentQuestionIndex];
    questionText.textContent = question.q;
    
    progressNum.textContent = currentQuestionIndex + 1;
    progressBar.style.width = `${((currentQuestionIndex) / quizData.length) * 100}%`;
    optionsContainer.innerHTML = '';
    
    const currentSelection = userSelections[currentQuestionIndex];
    nextBtn.disabled = !currentSelection;
    
    if (currentQuestionIndex === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
    
    question.a.forEach((optionData, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.textContent = optionData.text;
        
        if (currentSelection && currentSelection.index === index) {
            optionEl.classList.add('selected');
        }
        
        optionEl.onclick = () => {
            handleSelection(optionEl, index, optionData.p, optionData.s);
        };
        
        optionsContainer.appendChild(optionEl);
    });
}

function handleSelection(element, index, primaryType, secondaryType) {
    userSelections[currentQuestionIndex] = {
        index: index,
        p: primaryType,
        s: secondaryType
    };
    
    // Update styling
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    
    nextBtn.disabled = false;
}

function handleNext() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function handlePrev() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function showResult() {
    progressBar.style.width = '100%';
    quizPage.classList.remove('active');
    resultPage.classList.add('active');
    
    let scores = {
        wolf: 0, whale: 0, deer: 0, cat: 0, bird: 0, bear: 0
    };
    
    userSelections.forEach(sel => {
        if (sel) {
            if (sel.p) scores[sel.p] += 2;
            if (sel.s) scores[sel.s] += 1;
        }
    });

    // calculate highest
    let maxScore = -1;
    let finalResult = 'wolf';
    
    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            finalResult = type;
        }
    }
    
    const result = resultsData[finalResult];
    const namePrefix = userName ? `${userName}，你的结果是：` : "你的测试结果是：";
    
    resultContent.innerHTML = `
        <div class="result-card">
            <div class="result-subtitle">${namePrefix}</div>
            <div class="result-icon">${result.icon}</div>
            <div class="result-title">${result.title}</div>
            <div class="result-tagline">${result.tagline}</div>
            <div class="result-desc">${result.desc}</div>
            
            <div class="result-features">
                <div class="feature-item">
                    <span class="feature-label">🌟 你的优点</span>
                    <div class="feature-text">${result.pros}</div>
                </div>
                <div class="feature-item">
                    <span class="feature-label">🎭 你的隐藏面</span>
                    <div class="feature-text">${result.hidden}</div>
                </div>
                <div class="feature-item">
                    <span class="feature-label">🤝 适合你的相处方式</span>
                    <div class="feature-text">${result.match}</div>
                </div>
            </div>
        </div>
    `;
    
    // Save to window variable for easy copying
    window.currentShareText = result.shareText;
}

function restartQuiz() {
    resultPage.classList.remove('active');
    startPage.classList.add('active');
    window.scrollTo(0, 0);
}

function copyResult() {
    const textToCopy = window.currentShareText || "我刚刚测了是什么动物塑人格，快来一起玩！";
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('结果文案已复制，快去分享吧！');
        }).catch(() => fallbackCopy(textToCopy));
    } else {
        fallbackCopy(textToCopy);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        alert('结果文案已复制，快去分享吧！');
    } catch (err) {
        alert('自动复制失败，请手动截图分享~');
    }
    document.body.removeChild(textArea);
}
