const quizData = [
    {
        q: "周末最理想的状态是？",
        a: [
            { text: "和朋友出去玩，热热闹闹最开心", p: "golden", s: "beagle" },
            { text: "去没去过的地方，来一场小冒险", p: "husky", s: "germanShepherd" },
            { text: "一个人安静待着，最好谁也别打扰", p: "shiba", s: "corgi" },
            { text: "去一家有格调的漂亮店坐一下午", p: "poodle", s: "samoyed" },
            { text: "整理房间或列计划，让事情井井有条", p: "borderCollie", s: "labrador" }
        ]
    },
    {
        q: "朋友最常怎么形容你？",
        a: [
            { text: "温暖好脾气，像个小太阳", p: "labrador", s: "golden" },
            { text: "有点疯但非常有趣", p: "husky", s: "beagle" },
            { text: "外表有点冷，内心其实很柔软", p: "shiba", s: "germanShepherd" },
            { text: "懂生活、审美在线", p: "poodle", s: "samoyed" },
            { text: "极其靠谱，让人很安心", p: "corgi", s: "borderCollie" }
        ]
    },
    {
        q: "你更接近哪种社交状态？",
        a: [
            { text: "自带气氛组属性，到哪都不会冷场", p: "beagle", s: "husky" },
            { text: "其实挺慢热的，需要时间建立安全感", p: "corgi", s: "shiba" },
            { text: "很注意自己的形象和表达方式", p: "poodle", s: "golden" },
            { text: "说话有逻辑，遇到问题喜欢理性分析", p: "borderCollie", s: "germanShepherd" },
            { text: "不仅社交，对亲近的人还会特别黏", p: "labrador", s: "samoyed" }
        ]
    },
    {
        q: "下面哪种环境最让你觉得舒服？",
        a: [
            { text: "阳光很好、风很舒服的户外自然里", p: "samoyed", s: "husky" },
            { text: "安静熟悉的房间，有自己专属的角落", p: "shiba", s: "corgi" },
            { text: "布置得很精致、视觉充满美感的空间", p: "poodle", s: "labrador" },
            { text: "整洁有序、没有任何混乱的地方", p: "borderCollie", s: "germanShepherd" },
            { text: "热闹温馨、有一群熟人说说笑笑的地方", p: "golden", s: "beagle" }
        ]
    },
    {
        q: "遇到问题时，你通常会怎么做？",
        a: [
            { text: "先察觉情绪，安慰别人或缓和气氛", p: "golden", s: "labrador" },
            { text: "先冲了再说，边做边想，讨厌拖延", p: "husky", s: "beagle" },
            { text: "习惯自己默默想清楚，不太想麻烦别人", p: "shiba", s: "corgi" },
            { text: "分析原因，在脑子里划出最优解决路线", p: "borderCollie", s: "germanShepherd" },
            { text: "希望用一种体面、优雅的方式处理掉", p: "poodle", s: "samoyed" }
        ]
    },
    {
        q: "你更喜欢哪种穿搭/审美风格？",
        a: [
            { text: "舒服亲切，给人毫无距离感", p: "labrador", s: "golden" },
            { text: "随性自由，有时候不太按套路来", p: "husky", s: "beagle" },
            { text: "低调简洁，但细节有自己的固执", p: "shiba", s: "borderCollie" },
            { text: "精致讲究，连一根头发都要完美", p: "poodle", s: "samoyed" },
            { text: "经典耐看，看起来就很稳重", p: "corgi", s: "germanShepherd" }
        ]
    },
    {
        q: "你在微信群聊里通常是什么角色？",
        a: [
            { text: "高强度活跃选手，什么话题都能接", p: "beagle", s: "husky" },
            { text: "时不时发一些很美或者有意思的分享", p: "samoyed", s: "poodle" },
            { text: "潜水居多，只有被戳到了才偶尔发言", p: "shiba", s: "corgi" },
            { text: "不仅会接话，还会照顾到每个人的情绪", p: "golden", s: "labrador" },
            { text: "解答问题型选手，有事才会出现", p: "borderCollie", s: "germanShepherd" }
        ]
    },
    {
        q: "你觉得别人最依赖你什么方面？",
        a: [
            { text: "绝对不评价的情绪支持和倾听", p: "labrador", s: "golden" },
            { text: "给我出主意或者安排大大小小的事", p: "borderCollie", s: "germanShepherd" },
            { text: "只要找我玩，就一定能获得开心的体验", p: "husky", s: "beagle" },
            { text: "给我生活上的精致建议和好品味", p: "poodle", s: "samoyed" },
            { text: "只要待在我身边就很踏实安心", p: "corgi", s: "shiba" }
        ]
    },
    {
        q: "如果有了半天难得的空闲，你一定会？",
        a: [
            { text: "跑去打卡一家特别喜欢的艺术展览或咖啡馆", p: "poodle", s: "samoyed" },
            { text: "去完全在计划外的地方去兜风走走", p: "husky", s: "beagle" },
            { text: "抓紧把积压好久的待办清单全划掉", p: "borderCollie", s: "germanShepherd" },
            { text: "在家里躺平刷剧或者跟小宠物贴贴", p: "corgi", s: "shiba" },
            { text: "立刻摇人，凑一个饭局或者小聚会", p: "golden", s: "labrador" }
        ]
    },
    {
        q: "你对生活里的“变化”怎么看？",
        a: [
            { text: "越有变数才越好玩，一成不变太无趣了", p: "husky", s: "beagle" },
            { text: "变化没什么不好，前提是依然在我的掌控内", p: "borderCollie", s: "germanShepherd" },
            { text: "只要能保持最起码的体面感，随便变", p: "poodle", s: "samoyed" },
            { text: "不太喜欢，我更倾向平稳和预期的安全感", p: "corgi", s: "shiba" },
            { text: "只要身边还是那群在乎的人，什么变化都行", p: "labrador", s: "golden" }
        ]
    },
    {
        q: "恋爱/亲密关系中，你的倾向是？",
        a: [
            { text: "极其专一且深情，恨不得时时刻刻黏在一起", p: "labrador", s: "corgi" },
            { text: "很关心对方，习惯下意识妥协或照顾对方", p: "golden", s: "samoyed" },
            { text: "希望能像两座并立的岛屿，有紧密交集也有空间", p: "shiba", s: "borderCollie" },
            { text: "仪式感绝对不能少，哪怕是平凡的日子", p: "poodle", s: "samoyed" },
            { text: "一起疯一起闹，像最好的死党一样恋爱", p: "husky", s: "beagle" }
        ]
    },
    {
        q: "你会因为什么突然对一个人产生好感？",
        a: [
            { text: "他身上有无敌的执行力和保护欲", p: "germanShepherd", s: "borderCollie" },
            { text: "他细心地察觉并照顾到了我微小的情绪", p: "golden", s: "labrador" },
            { text: "他品味极佳，身上还有好闻的味道", p: "poodle", s: "samoyed" },
            { text: "他和我一样有个性，坚持自己的步调", p: "shiba", s: "corgi" },
            { text: "他笑起来超有感染力，像个发光体", p: "beagle", s: "husky" }
        ]
    },
    {
        q: "如果别人对你提出不合理的期待，你会？",
        a: [
            { text: "直接拒绝，并在心里拉远距离", p: "shiba", s: "germanShepherd" },
            { text: "虽然为难，但可能还是会尽力帮一下", p: "golden", s: "labrador" },
            { text: "不按套路出牌，糊弄或者打太极躲过去", p: "husky", s: "beagle" },
            { text: "用极强的逻辑说明为什么这事不合理", p: "borderCollie", s: "poodle" },
            { text: "保持礼貌微笑婉拒，依然维持体面", p: "samoyed", s: "corgi" }
        ]
    },
    {
        q: "对于“出游”的看法，你是？",
        a: [
            { text: "走走走！哪怕迷路了也是一种缘分乐趣！", p: "husky", s: "beagle" },
            { text: "旅行攻略在我这里精准到每一个小时", p: "borderCollie", s: "germanShepherd" },
            { text: "行李箱必须带上两套精心搭配的用来拍照的衣服", p: "poodle", s: "samoyed" },
            { text: "无所谓去哪，主要是和合拍的朋友一起就开心", p: "golden", s: "labrador" },
            { text: "与其去人挤人的景点，不如躺个舒服的酒店", p: "corgi", s: "shiba" }
        ]
    },
    {
        q: "别人察觉不到的，你最像哪种“隐藏属性”？",
        a: [
            { text: "其实挺害怕孤独的，比看起来更需要别人的偏爱", p: "labrador", s: "samoyed" },
            { text: "看似平易近人，心里对于美的底线比谁都固执", p: "poodle", s: "golden" },
            { text: "表面很活泼，但有时只是不想让人担心的伪装", p: "samoyed", s: "beagle" },
            { text: "看着懒散平常，关键时刻却有出乎意料的震慑力", p: "corgi", s: "germanShepherd" },
            { text: "因为想得太全面了，经常独自承受精神内耗", p: "borderCollie", s: "shiba" }
        ]
    }
];

const resultsData = {
    golden: {
        title: "金毛犬型人格",
        icon: "🐕",
        tagline: "温暖如阳的贴心小棉袄",
        desc: "你就像大家心中的小太阳，总是散发着温暖和善意。你非常擅长察觉别人的情绪，愿意主动提供支持和陪伴。在人群中，你是一个让人觉得很舒服、没有防备心的存在。你对待朋友非常真诚，容易相信别人，希望能和身边的人保持和谐愉快的关系。",
        pros: "共情能力强、让人感到温暖舒适",
        hidden: "有时候为了照顾别人，容易委屈自己，其实你也需要被好好偏爱。",
        match: "脾气好、能给你积极情绪反馈、懂你付出的人。",
        shareText: "我是温暖如阳的【金毛犬型人格】🐶，快来测测你是哪种狗狗！"
    },
    husky: {
        title: "哈士奇型人格",
        icon: "🤪",
        tagline: "放荡不羁的欢乐制造机",
        desc: "你是一个不折不扣的自由灵魂，脑子里总有奇奇怪怪的想法和无穷的精力。你不喜欢被规律和条条框框束缚，对世界充满了好奇心和探索欲。和你在一起永远不会无聊，因为你总能带来意想不到的惊喜（或惊吓），你是大家的快乐源泉。",
        pros: "充满乐观、行动力强、总能带来快乐",
        hidden: "表面看起来没心没肺像个小孩，其实心里什么都懂，只是习惯用搞笑掩饰深情。",
        match: "能接住你的梗，愿意陪你一起疯一起闹的人。",
        shareText: "我是放飞自我的【哈士奇型人格】🤪，快来测测你是哪种狗狗！"
    },
    shiba: {
        title: "柴犬型人格",
        icon: "🦊",
        tagline: "酷飒与柔软并存的独立灵魂",
        desc: "你有着很强的边界感，不喜欢轻易和陌生人套近乎，表面看起来可能有些高冷或倔强。你很享受独处的时间，觉得安静待着就是一种能量回血。但一旦进入你的信任圈，别人就会发现你其实是个外冷内热的人，有着只给熟悉的人展示的柔软和可爱。",
        pros: "独立清醒、有自己的精神世界、反差萌",
        hidden: "有时候因为自尊心太强或者太倔，明明心里在意却不好意思说出口。",
        match: "有耐心、能尊重你空间，并且愿意慢慢走近你内心的人。",
        shareText: "我是外冷内热的【柴犬型人格】🦊，快来测测你是哪种狗狗！"
    },
    poodle: {
        title: "贵宾犬型人格",
        icon: "🐩",
        tagline: "精致优雅的生活艺术家",
        desc: "你对生活有着自己的追求和坚持，注重仪式感和细节。不管是穿搭、环境还是工作，你都希望呈现出一种体面和充满质感的状态。你具备很好的审美能力，同时也懂得如何在社交中保持优雅和得体，经常是身边人的“品味担当”。",
        pros: "审美在线、讲究生活品质、细致入微",
        hidden: "偶尔会有点挑剔或者容易产生包袱，有时候稍微放松一点也没关系。",
        match: "能欣赏你的美，愿意和你一起用心经营生活细节的人。",
        shareText: "我是精致优雅的【贵宾犬型人格】🐩，快来测测你是哪种狗狗！"
    },
    borderCollie: {
        title: "边境牧羊犬型人格",
        icon: "🐾",
        tagline: "智商在线的满分执行者",
        desc: "你是绝对的聪明人，学习能力和分析能力都很强。你喜欢有条理、有效率地处理事情，当你把复杂的局面整理得井井有条时，会获得很大的成就感。在团队或朋友群体中，你经常扮演那个解决问题和出谋划策的靠谱角色，让人觉得只要有你在就不会出乱子。",
        pros: "头脑聪明、做事靠谱、逻辑清晰",
        hidden: "因为脑子转得太快，有时候容易想太多，导致精神内耗或偶尔失眠。",
        match: "能给你提供智力对冲、势均力敌，或能让你完全放松大脑的人。",
        shareText: "我是智力担当的【边牧型人格】🐾，快来测测你是哪种狗狗！"
    },
    labrador: {
        title: "拉布拉多型人格",
        icon: "🦮",
        tagline: "踏实忠诚的满分伴侣",
        desc: "情感充沛且真诚稳定是你最大的特点。你非常看重感情，一旦认定了某个人或某件事，就会毫无保留地投入。你的情绪相当稳定，不仅自己能维持平和的心态，还能像一个软软的抱枕一样，给身边的人提供极大的情绪价值和安全感。",
        pros: "忠诚专一、极具包容心、情绪稳定",
        hidden: "过于重感情导致有时变得非常黏人或者对分开感到焦虑。",
        match: "懂得珍惜你的真心，并且能给予你同等坚定回应的人。",
        shareText: "我是柔和坚定的【拉布拉多型人格】🦮，快来测测你是哪种狗狗！"
    },
    beagle: {
        title: "比格犬型人格",
        icon: "🐶",
        tagline: "热情拉满的气氛制造者",
        desc: "你充满好奇心和活力，情感表达非常直接和热烈。只要有你在的地方，绝对不用担心冷场。擅长活跃气氛的你，经常能在聚会里成为焦点。你有一张藏不住心事的脸，开心和难过都写在脸上，这种真性情让你很容易和别人拉近距离。",
        pros: "性格开朗、富有感染力、社交达人",
        hidden: "有时候情绪来得快去得也快，偶尔会有点小冲动，过后自己也会反思。",
        match: "能包容你的小任性，并且喜欢热闹开心氛围的人。",
        shareText: "我是活力四射的【比格犬型人格】🐶，快来测测你是哪种狗狗！"
    },
    corgi: {
        title: "柯基型人格",
        icon: "🍞",
        tagline: "温暖治愈的倔强小面包",
        desc: "你有着让人觉得非常亲切、想要靠近的治愈气场，生活方式偏向安稳和舒服，喜欢待在熟悉的圈子里做自己喜欢的小事。但别被你软萌的外表骗了，其实你内心非常有主见，有着自己的“小骄傲”，认定的事情很难被别人改变。",
        pros: "充满治愈感、能提供踏实感、内心坚定",
        hidden: "遇到不认同的事情时会出乎意料地固执，绝不轻易妥协。",
        match: "懂你的坚持，愿意陪你过安稳踏实小日子的人。",
        shareText: "我是治愈又倔强的【柯基型人格】🍞，快来测测你是哪种狗狗！"
    },
    samoyed: {
        title: "萨摩耶型人格",
        icon: "☁️",
        tagline: "自带高光的微笑天使",
        desc: "你走到哪里都很吸引眼球，性格开朗乐观，有着感染力极强的“微笑面具”。你非常享受生活中那些充满灵感和美好的事情，有着很好的个人品味。你在社交中游刃有余，不仅自己阳光，也总是忍不住想要把周围的人都带入开心愉快的频道里。",
        pros: "阳光迷人、审美力强、超级讨喜",
        hidden: "习惯了展示积极的一面，反而把负面情绪和压力都深藏在心里自己消化。",
        match: "能看穿你笑容背后的疲惫，可以让你安心卸下防备的人。",
        shareText: "我是微笑天使【萨摩耶型人格】☁️，快来测测你是哪种狗狗！"
    },
    germanShepherd: {
        title: "德国牧羊犬型人格",
        icon: "👮",
        tagline: "行动到底的护卫先锋",
        desc: "你责任感极强，充满纪律性和强大的执行力。遇到问题时你从来不喜欢抱怨或拖延，而是立刻想办法去解决。你习惯做掌控全局的人。对待自己在意的人，你有着极强的保护欲，会用实际行动来证明你的靠谱和关怀，是妥妥的实力派。",
        pros: "责任心爆棚、行动力一流、强大可靠",
        hidden: "有时候看起来太过严肃认真，导致别人觉得难以靠近，其实内心也有柔软的一面。",
        match: "能够看见你的辛苦付出，并且能带你放松下来的人。",
        shareText: "我是靠谱又霸气的【德牧型人格】👮，快来测测你是哪种狗狗！"
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
        golden: 0, husky: 0, shiba: 0, poodle: 0, borderCollie: 0,
        labrador: 0, beagle: 0, corgi: 0, samoyed: 0, germanShepherd: 0
    };
    
    userSelections.forEach(sel => {
        if (sel) {
            if (sel.p) scores[sel.p] += 2;
            if (sel.s) scores[sel.s] += 1;
        }
    });

    // calculate highest
    let maxScore = -1;
    let finalResult = 'golden';
    
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
    const textToCopy = window.currentShareText || "我刚刚测了是什么狗系人格，快来一起玩！";
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
