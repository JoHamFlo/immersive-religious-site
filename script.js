const islamicNames = [
{n:1,arabic:'ٱلرَّحْمَـٰنُ',name:'Ar-Rahman',meaning:'The Beneficent',theology:'He wills goodness and mercy for all His creatures.',connection:'The LORD God, merciful — Exodus 34:6; Deuteronomy 4:31',tags:['mercy','shared']},
{n:2,arabic:'ٱلرَّحِيمُ',name:'Ar-Raheem',meaning:'The Merciful',theology:'He acts with extreme kindness.',connection:'',tags:['mercy']},
{n:3,arabic:'ٱلْمَلِكُ',name:'Al-Malik',meaning:'The King',theology:'The Sovereign Lord with complete dominion, free from imperfection.',connection:'King of Kings; Jehovah-Hamelech — Psalm 10:16; Psalm 98:6',tags:['power','shared']},
{n:4,arabic:'ٱلْقُدُّوسُ',name:'Al-Quddus',meaning:'The Most Holy',theology:'Pure and removed from every imperfection or evil.',connection:'',tags:['guidance']},
{n:5,arabic:'ٱلسَّلَامُ',name:'As-Salam',meaning:'The Giver of Peace',theology:'Free from every defect; with Him comes tranquility.',connection:'Jehovah Shalom, The Lord is Peace — Judges 6:24',tags:['mercy','shared']},
{n:6,arabic:'ٱلْمُؤْمِنُ',name:'Al-Mumin',meaning:'The Infuser of Faith',theology:'He witnesses to His own oneness and confirms true belief.',connection:'',tags:['guidance']},
{n:7,arabic:'ٱلْمُهَيْمِنُ',name:'Al-Muhaymin',meaning:'The Guardian',theology:'He witnesses the sayings and deeds of His creatures.',connection:'',tags:['guidance']},
{n:8,arabic:'ٱلْعَزِيزُ',name:'Al-Aziz',meaning:'The Mighty One',theology:'The strong Defender who is never defeated.',connection:'Jehovah-Ganan; Jehovah-Izoa Hakaboth — Psalm 89:18; Psalm 24:8',tags:['power','shared']},
{n:9,arabic:'ٱلْجَبَّارُ',name:'Al-Jabbar',meaning:'The All-Compelling',theology:'Nothing happens in His domain except what He wills.',connection:'',tags:['power']},
{n:10,arabic:'ٱلْمُتَكَبِّرُ',name:'Al-Mutakabbir',meaning:'The Dominant One',theology:'He is unlike creation and free from created attributes.',connection:'',tags:['power']},
{n:11,arabic:'ٱلْخَالِقُ',name:'Al-Khaliq',meaning:'The Creator',theology:'He brings everything from non-existence into existence.',connection:'Jehovah Elohim; Jehovah-Bara — Genesis 2:4; Isaiah 40:28',tags:['power','shared']},
{n:12,arabic:'ٱلْبَارِئُ',name:'Al-Bari',meaning:'The Maker',theology:'The Creator with power to shape and bring entities forth.',connection:'',tags:['power']},
{n:13,arabic:'ٱلْمُصَوِّرُ',name:'Al-Musawwir',meaning:'The Flawless Shaper',theology:'He forms His creatures in different forms and pictures.',connection:'',tags:['power']},
{n:14,arabic:'ٱلْغَفَّارُ',name:'Al-Ghaffar',meaning:'The Great Forgiver',theology:'He forgives sins again and again.',connection:'',tags:['mercy']},
{n:15,arabic:'ٱلْقَهَّارُ',name:'Al-Qahhar',meaning:'The All-Prevailing One',theology:'Dominant, perfectly powerful, and unable to be overcome.',connection:'',tags:['power']},
{n:16,arabic:'ٱلْوَهَّابُ',name:'Al-Wahhab',meaning:'The Supreme Bestower',theology:'Generous in giving abundantly without needing return.',connection:'',tags:['mercy']},
{n:17,arabic:'ٱلرَّزَّاقُ',name:'Ar-Razzaq',meaning:'The Total Provider',theology:'The Sustainer and Provider.',connection:'Jehovah Jireh, The Lord Will Provide — Genesis 22:14',tags:['mercy','shared']},
{n:18,arabic:'ٱلْفَتَّاحُ',name:'Al-Fattah',meaning:'The Opener',theology:'The Solver, Reliever, Judge, and opener of closed matters.',connection:'',tags:['guidance']},
{n:19,arabic:'ٱلْعَلِيمُ',name:'Al-Alim',meaning:'The All-Knowing One',theology:'Nothing is absent from His knowledge.',connection:'',tags:['guidance']},
{n:20,arabic:'ٱلْقَابِضُ',name:'Al-Qabid',meaning:'The Restricting One',theology:'He constricts sustenance by wisdom.',connection:'',tags:['power']},
{n:21,arabic:'ٱلْبَاسِطُ',name:'Al-Basit',meaning:'The Extender',theology:'He expands and widens sustenance by generosity and mercy.',connection:'',tags:['mercy']},
{n:22,arabic:'ٱلْخَافِضُ',name:'Al-Khafid',meaning:'The Reducer',theology:'He lowers whom He wills and raises whom He wills.',connection:'',tags:['power']},
{n:23,arabic:'ٱلرَّافِعُ',name:'Ar-Rafi',meaning:'The Elevating One',theology:'He raises whom He wills by His endowment.',connection:'',tags:['power']},
{n:24,arabic:'ٱلْمُعِزُّ',name:"Al-Mu'izz",meaning:'The Honourer-Bestower',theology:'He gives esteem, and none can degrade whom He honors.',connection:'',tags:['power']},
{n:25,arabic:'ٱلْمُذِلُّ',name:'Al-Muzil',meaning:'The Abaser',theology:'He humbles whom He wills, and none can give esteem against Him.',connection:'',tags:['power']},
{n:26,arabic:'ٱلسَّمِيعُ',name:'As-Sami',meaning:'The All-Hearer',theology:'He hears all things without instrument, organ, or limitation.',connection:'',tags:['guidance']},
{n:27,arabic:'ٱلْبَصِيرُ',name:'Al-Baseer',meaning:'The All-Seeing',theology:'He sees all things without physical instrument.',connection:'Jehovah Roi — Genesis 16:13',tags:['guidance','shared']},
{n:28,arabic:'ٱلْحَكَمُ',name:'Al-Hakam',meaning:'The Impartial Judge',theology:'His judgment is authoritative and His judgment is His word.',connection:'Jehovah-Hashopet, Lord My Judge — Judges 11:27',tags:['guidance','shared']},
{n:29,arabic:'ٱلْعَدْلُ',name:'Al-Adl',meaning:'The Embodiment of Justice',theology:'The Just One who is entitled to do what He does.',connection:'',tags:['guidance']},
{n:30,arabic:'ٱللَّطِيفُ',name:'Al-Lateef',meaning:'The Knower of Subtleties',theology:'Subtle, gracious, kind, and generous toward His servants.',connection:'',tags:['mercy','guidance']},
{n:31,arabic:'ٱلْخَبِيرُ',name:'Al-Khabir',meaning:'The All-Aware One',theology:'He knows the truth of all things.',connection:'I AM THAT I AM',tags:['guidance','shared']},
{n:32,arabic:'ٱلْحَلِيمُ',name:'Al-Haleem',meaning:'The Clement One',theology:'He delays punishment and may forgive those who deserve it.',connection:'',tags:['mercy']},
{n:33,arabic:'ٱلْعَظِيمُ',name:'Al-Azeem',meaning:'The Magnificent One',theology:'Deserving glory, exaltation, and purity from imperfection.',connection:'I AM THAT I AM; Jehovah-Kabodhi — Psalm 3:3',tags:['power','shared']},
{n:34,arabic:'ٱلْغَفُورُ',name:'Al-Ghafoor',meaning:'The All-Forgiving',theology:'The One who forgives a lot.',connection:'',tags:['mercy']},
{n:35,arabic:'ٱلشَّكُورُ',name:'Ash-Shakur',meaning:'The Appreciative One',theology:'He gives great reward for little obedience.',connection:'',tags:['mercy']},
{n:36,arabic:'ٱلْعَلِيُّ',name:'Al-Aliyy',meaning:'The Sublime One',theology:'The Most High, above created attributes.',connection:'Jehovah El Elyon, The Lord Most High — Psalm 7:17',tags:['power','shared']},
{n:37,arabic:'ٱلْكَبِيرُ',name:'Al-Kabeer',meaning:'The Great One',theology:'Greater than everything in status.',connection:'',tags:['power']},
{n:38,arabic:'ٱلْحَفِيظُ',name:'Al-Hafiz',meaning:'The Guarding One',theology:'He preserves and protects whom He wills.',connection:'',tags:['power']},
{n:39,arabic:'ٱلْمُقِيتُ',name:'Al-Muqeet',meaning:'The Sustaining One',theology:'The maintainer, guardian, feeder, and powerful One.',connection:'',tags:['power']},
{n:40,arabic:'ٱلْحَسِيبُ',name:'Al-Haseeb',meaning:'The Reckoning One',theology:'The Reckoner who gives satisfaction.',connection:'',tags:['guidance']},
{n:41,arabic:'ٱلْجَلِيلُ',name:'Al-Jaleel',meaning:'The Majestic One',theology:'Attributed with greatness of power and glory of status.',connection:'',tags:['power']},
{n:42,arabic:'ٱلْكَرِيمُ',name:'Al-Karim',meaning:'The Bountiful One',theology:'The generous and gracious One.',connection:'',tags:['mercy']},
{n:43,arabic:'ٱلرَّقِيبُ',name:'Ar-Raqib',meaning:'The Watchful One',theology:'Nothing is absent from Him; connected to divine knowledge.',connection:'',tags:['guidance']},
{n:44,arabic:'ٱلْمُجِيبُ',name:'Al-Mujeeb',meaning:'The Responding One',theology:'He answers the needy and rescues those who call upon Him.',connection:'',tags:['mercy']},
{n:45,arabic:'ٱلْوَاسِعُ',name:'Al-Wasi',meaning:'The All-Pervading One',theology:'The Vast, all-embracing, knowledgeable One.',connection:'',tags:['guidance']},
{n:46,arabic:'ٱلْحَكِيمُ',name:'Al-Hakeem',meaning:'The Wise One',theology:'Wise, correct in His doings, and Judge of Judges.',connection:'',tags:['guidance']},
{n:47,arabic:'ٱلْوَدُودُ',name:'Al-Wadud',meaning:'The Loving One',theology:'Most loving, affectionate, and beloved.',connection:'',tags:['mercy']},
{n:48,arabic:'ٱلْمَجِيدُ',name:'Al-Majeed',meaning:'The Glorious One',theology:'Perfect in power, status, compassion, generosity, and kindness.',connection:'',tags:['power','mercy']},
{n:49,arabic:'ٱلْبَاعِثُ',name:"Al-Ba'ith",meaning:'The Infuser of New Life',theology:'The Awakener, Resurrector, and Arouser.',connection:'',tags:['power']},
{n:50,arabic:'ٱلشَّهِيدُ',name:'Ash-Shaheed',meaning:'The All-Observing Witness',theology:'The Witness from whom nothing is absent.',connection:'',tags:['guidance']},
{n:51,arabic:'ٱلْحَقُّ',name:'Al-Haqq',meaning:'The Embodiment of Truth',theology:'The True One who truly exists.',connection:'I AM THAT I AM',tags:['guidance','shared']},
{n:52,arabic:'ٱلْوَكِيلُ',name:'Al-Wakeel',meaning:'The Universal Trustee',theology:'The One relied upon who gives satisfaction.',connection:'',tags:['mercy']},
{n:53,arabic:'ٱلْقَوِيُّ',name:'Al-Qawiyy',meaning:'The Strong One',theology:'The One with complete power.',connection:'',tags:['power']},
{n:54,arabic:'ٱلْمَتِينُ',name:'Al-Matin',meaning:'The Firm One',theology:'Extreme uninterrupted power; He does not tire.',connection:'',tags:['power']},
{n:55,arabic:'ٱلْوَلِيُّ',name:'Al-Waliy',meaning:'The Protecting Associate',theology:'The protecting friend and supporter.',connection:'',tags:['mercy']},
{n:56,arabic:'ٱلْحَمِيدُ',name:'Al-Hameed',meaning:'The Sole-Laudable One',theology:'The Praiseworthy One who deserves praise.',connection:'',tags:['guidance']},
{n:57,arabic:'ٱلْمُحْصِي',name:'Al-Muhsi',meaning:'The All-Enumerating One',theology:'The Counter and Reckoner who knows the count of all things.',connection:'',tags:['guidance']},
{n:58,arabic:'ٱلْمُبْدِئُ',name:'Al-Mubdi',meaning:'The Originator',theology:'He began the human being by creating him.',connection:'',tags:['power']},
{n:59,arabic:'ٱلْمُعِيدُ',name:'Al-Muid',meaning:'The Restorer',theology:'He brings creatures back after death.',connection:'',tags:['power']},
{n:60,arabic:'ٱلْمُحْيِي',name:'Al-Muhyi',meaning:'The Maintainer of Life',theology:'The Restorer and Giver of Life.',connection:'',tags:['power']},
{n:61,arabic:'ٱلْمُمِيتُ',name:'Al-Mumeet',meaning:'The Inflictor of Death',theology:'The Creator of death who renders the living dead.',connection:'',tags:['power']},
{n:62,arabic:'ٱلْحَيُّ',name:'Al-Hayy',meaning:'The Eternally Living One',theology:'Alive with a life unlike created life.',connection:'I AM THAT I AM',tags:['shared']},
{n:63,arabic:'ٱلْقَيُّومُ',name:'Al-Qayyum',meaning:'The Self-Subsisting One',theology:'Self-existing; all others depend upon Him.',connection:'I AM THAT I AM',tags:['shared']},
{n:64,arabic:'ٱلْوَاجِدُ',name:'Al-Wajid',meaning:'The Perceiver',theology:'The Finder, the Rich One who is never poor.',connection:'',tags:['guidance']},
{n:65,arabic:'ٱلْمَاجِدُ',name:'Al-Maajid',meaning:'The All-Noble One',theology:'The Glorious One who is most glorious.',connection:'',tags:['power']},
{n:66,arabic:'ٱلْوَاحِدُ',name:'Al-Wahid',meaning:'The Only One',theology:'Unique, one, and without partner.',connection:'',tags:['guidance']},
{n:67,arabic:'ٱلْأَحَدُ',name:'Al-Ahad',meaning:'The Sole One',theology:'The One.',connection:'Lord our God is One — Mark 12:29; Deuteronomy 6:4; Jehovah-Eli — Psalm 18:2',tags:['shared']},
{n:68,arabic:'ٱلصَّمَدُ',name:'As-Samad',meaning:'The Supreme Provider',theology:'Eternal, independent, and relied upon in every need.',connection:'Jehovah Jireh; I AM THAT I AM — Genesis 22:14',tags:['shared']},
{n:69,arabic:'ٱلْقَادِرُ',name:'Al-Qadir',meaning:'The All-Powerful',theology:'The capable One attributed with power.',connection:'',tags:['power']},
{n:70,arabic:'ٱلْمُقْتَدِرُ',name:'Al-Muqtadir',meaning:'The All-Authoritative One',theology:'Perfect power; nothing is withheld from Him.',connection:'',tags:['power']},
{n:71,arabic:'ٱلْمُقَدِّمُ',name:'Al-Muqaddim',meaning:'The Expediting One',theology:'He puts things in their right places.',connection:'',tags:['guidance']},
{n:72,arabic:'ٱلْمُؤَخِّرُ',name:'Al-Muakhkhir',meaning:'The Delayer',theology:'He advances or delays what He wills.',connection:'',tags:['power']},
{n:73,arabic:'ٱلْأَوَّلُ',name:'Al-Awwal',meaning:'The Very First',theology:'His existence has no beginning.',connection:'',tags:['power']},
{n:74,arabic:'ٱلْآخِرُ',name:'Al-Akhir',meaning:'The Infinite Last One',theology:'His existence has no end.',connection:'',tags:['power']},
{n:75,arabic:'ٱلظَّاهِرُ',name:'Az-Zaahir',meaning:'The Perceptible',theology:'The manifest, conspicuous, evident One.',connection:'',tags:['guidance']},
{n:76,arabic:'ٱلْبَاطِنُ',name:'Al-Baatin',meaning:'The Imperceptible',theology:'The hidden, inner One who knows hidden things.',connection:'',tags:['guidance']},
{n:77,arabic:'ٱلْوَالِي',name:'Al-Wali',meaning:'The Holder of Supreme Authority',theology:'The governor who owns and manages all things.',connection:'',tags:['power']},
{n:78,arabic:'ٱلْمُتَعَالِي',name:'Al-Mutaali',meaning:'The Extremely Exalted One',theology:'The Most Exalted, free from attributes of creation.',connection:'',tags:['power']},
{n:79,arabic:'ٱلْبَرُّ',name:'Al-Barr',meaning:'The Fountain-Head of Truth',theology:'The source of goodness, righteousness, and kindness to creation.',connection:'Jehovah Tsidkenu, The Lord Our Righteousness — Jeremiah 23:6',tags:['guidance','shared']},
{n:80,arabic:'ٱلتَّوَّابُ',name:'At-Tawwab',meaning:'The Ever-Acceptor of Repentance',theology:'The One who accepts return and repentance.',connection:'',tags:['mercy']},
{n:81,arabic:'ٱلْمُنْتَقِمُ',name:'Al-Muntaqim',meaning:'The Retaliator',theology:'The Avenger and inflictor of retribution.',connection:'',tags:['power']},
{n:82,arabic:'ٱلْعَفُوُّ',name:'Al-Afuw',meaning:'The Supreme Pardoner',theology:'The Pardoner, Forgiver, and Eliminator of sins.',connection:'',tags:['mercy']},
{n:83,arabic:'ٱلرَّؤُوفُ',name:'Ar-Rauf',meaning:'The Benign One',theology:'Most kind, tenderly merciful, clement, and compassionate.',connection:'',tags:['mercy']},
{n:84,arabic:'مَالِكُ ٱلْمُلْكُ',name:'Malikul-Mulk',meaning:'The Eternal Possessor of Sovereignty',theology:'He controls dominion and gives dominion as He wills.',connection:'',tags:['power']},
{n:85,arabic:'ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ',name:'Dhul-Jalaali-Wal-Ikram',meaning:'The Possessor of Majesty and Honour',theology:'The Lord of majesty and bounty.',connection:'',tags:['power','mercy']},
{n:86,arabic:'ٱلْمُقْسِطُ',name:'Al-Muqsit',meaning:'The Just One',theology:'Equitable and just in judgment.',connection:'',tags:['guidance']},
{n:87,arabic:'ٱلْجَامِعُ',name:'Al-Jami',meaning:'The Gatherer',theology:'He gathers creatures on the Day of Judgment.',connection:'',tags:['power']},
{n:88,arabic:'ٱلْغَنِيُّ',name:'Al-Ghaniy',meaning:'The Self-Sufficient One',theology:'He does not need creation.',connection:'',tags:['power']},
{n:89,arabic:'ٱلْمُغْنِيُّ',name:'Al-Mughni',meaning:'The Enricher',theology:'The Bestower of wealth and fulfiller of needs.',connection:'',tags:['mercy']},
{n:90,arabic:'ٱلْمَانِعُ',name:'Al-Mani',meaning:'The Preventer',theology:'The Withholder.',connection:'',tags:['power']},
{n:91,arabic:'ٱلضَّارُ',name:'Ad-Darr',meaning:'The Distressor',theology:'The Corrector, Balancer, Afflicter, and Punisher.',connection:'',tags:['power']},
{n:92,arabic:'ٱلنَّافِعُ',name:'An-Naafi',meaning:'The Bestower of Benefits',theology:'The Creator of good and the Benefiter.',connection:'',tags:['mercy']},
{n:93,arabic:'ٱلنُّورُ',name:'An-Noor',meaning:'The Prime Light',theology:'The Light and the One who guides.',connection:'Jehovah-Ori, Lord My Light — Psalm 27:1',tags:['guidance','shared']},
{n:94,arabic:'ٱلْهَادِي',name:'Al-Hadi',meaning:'The Provider of Guidance',theology:'The guide and leader of the right path.',connection:'Jehovah Nissi, The Lord My Banner — Exodus 17:15',tags:['guidance','shared']},
{n:95,arabic:'ٱلْبَدِيعُ',name:'Al-Badi',meaning:'The Unique One',theology:'The incomparable and unprecedented Originator.',connection:'',tags:['power']},
{n:96,arabic:'ٱلْبَاقِي',name:'Al-Baaqi',meaning:'The Ever Surviving One',theology:'Everlasting, enduring, and ever-present.',connection:'',tags:['power']},
{n:97,arabic:'ٱلْوَارِثُ',name:'Al-Warith',meaning:'The Eternal Inheritor',theology:'The Heir whose existence remains.',connection:'',tags:['power']},
{n:98,arabic:'ٱلرَّشِيدُ',name:'Ar-Rasheed',meaning:'The Guide to Path of Rectitude',theology:'The One who guides to the right path.',connection:'',tags:['guidance']},
{n:99,arabic:'ٱلصَّبُورُ',name:'As-Sabur',meaning:'The Extensively Enduring One',theology:'The Patient One who does not quickly punish sinners.',connection:'',tags:['mercy']}
];

const christianNames = [
['El-Shaddai','God Almighty','Emphasizes God\'s supreme power and ability to sustain His people.'],
['Ehyeh Asher Ehyeh','I AM THAT I AM','Reveals God as self-existent and eternal; connects with Al-Ahad, As-Samad, Al-Hayy, Al-Qayyum, Al-Azeem, Al-Haqq, and Al-Khabir.'],
['YHWH / Jehovah','The covenant name of God','The personal divine name in the Hebrew Bible; connected with Allah and several names of divine oneness and self-existence.'],
['Adonai','Lord','Highlights God\'s authority, lordship, and rightful rule.'],
['Jehovah Rapha','The Lord Who Heals','Shows God as healer and restorer — Exodus 15:26.'],
['Jehovah Raah','The Lord My Shepherd','God as protector, guide, leader, and provider — Psalm 23:1.'],
['Jehovah Mekoddishkem','The Lord Who Sanctifies You','God makes His people holy — Leviticus 20:8; Exodus 31:13.'],
['Jehovah Sabaoth','The Lord of Hosts','God leads heaven\'s armies and fights for His people — 1 Samuel 1:3.'],
['Jehovah Shammah','The Lord Is There','God\'s presence remains with His people — Ezekiel 48:35.'],
['Jehovah-Immeku','The Lord Is With You','God\'s nearness and companionship — Judges 6:12.'],
['Jehovah-Adon Kal Ha\'arets','Lord of Earth','God as Lord over the earth — Joshua 3:13.'],
['Jehovah-Chatsahi / Jehovah-Ez-Lami','Lord My Strength','God as strength and support — Psalm 27:1; Psalm 28:7.'],
['Jehovah-Chereb','Lord the Sword','God as defender and warrior — Deuteronomy 33:29.'],
['Jehovah-Gador Milchamah','Mighty in Battle','God as victorious warrior — Psalm 24:8.'],
['Jehovah-Goel','Lord My Redeemer','God as rescuer and redeemer — Isaiah 49:26; 60:16.'],
['Jehovah-Hosheah','Lord Saves','God as savior — Psalm 20:9.'],
['Jehovah-Kanna','Lord Jealous','God\'s covenant exclusivity — Exodus 34:14.'],
['Jehovah-Keren-Yishi','Horn of Salvation','God as strength of salvation — Psalm 18:2.'],
['Jehovah-Machsi','Lord My Refuge','God as safe shelter — Psalm 91:9.'],
['Jehovah-Magen','Lord My Shield','God as defender — Deuteronomy 33:29.'],
['Jehovah-Ma\'oz','Lord My Fortress','God as a place of strength — Jeremiah 16:19.'],
['Jehovah-Mephalti','Lord My Deliverer','God as rescuer — Psalm 18:2.'],
['Jehovah-Metshodhathi','Lord My Fortress','God as fortress and protection — Psalm 18:2.'],
['Jehovah-Misqabbi','Lord My High Tower','God as elevated refuge — Psalm 18:2.'],
['Jehovah-Naheh','Lord Who Smites','God as judge — Ezekiel 7:9.'],
['Jehovah-Seli','Lord My Rock','God as solid foundation — Psalm 18:2.'],
['Jehovah-Uzam','Lord Strength in Trouble','God as strength during distress — Isaiah 49:26.']
];

const verseTexts = {
  'Exodus 34:6': 'Exodus 34:6 — And the LORD passed by before him, and proclaimed, The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in goodness and truth.',
  'Deuteronomy 4:31': 'Deuteronomy 4:31 — For the LORD thy God is a merciful God; he will not forsake thee, neither destroy thee, nor forget the covenant of thy fathers which he sware unto them.',
  'Psalm 98:6': 'Psalm 98:6 — With trumpets and sound of cornet make a joyful noise before the LORD, the King.',
  'Psalm 10:16': 'Psalm 10:16 — The LORD is King for ever and ever: the heathen are perished out of his land.',
  'Judges 6:24': 'Judges 6:24 — Then Gideon built an altar there unto the LORD, and called it Jehovah-shalom: unto this day it is yet in Ophrah of the Abi-ezrites.',
  'Psalm 89:18': 'Psalm 89:18 — For the LORD is our defence; and the Holy One of Israel is our king.',
  'Psalm 24:8': 'Psalm 24:8 — Who is this King of glory? The LORD strong and mighty, the LORD mighty in battle.',
  'Genesis 2:4': 'Genesis 2:4 — These are the generations of the heavens and of the earth when they were created, in the day that the LORD God made the earth and the heavens.',
  'Isaiah 40:28': 'Isaiah 40:28 — Hast thou not known? hast thou not heard, that the everlasting God, the LORD, the Creator of the ends of the earth, fainteth not, neither is weary? there is no searching of his understanding.',
  'Genesis 22:14': 'Genesis 22:14 — And Abraham called the name of that place Jehovah-jireh: as it is said to this day, In the mount of the LORD it shall be seen.',
  'Genesis 16:13': 'Genesis 16:13 — And she called the name of the LORD that spake unto her, Thou God seest me: for she said, Have I also here looked after him that seeth me?',
  'Judges 11:27': 'Judges 11:27 — Wherefore I have not sinned against thee, but thou doest me wrong to war against me: the LORD the Judge be judge this day between the children of Israel and the children of Ammon.',
  'Psalm 3:3': 'Psalm 3:3 — But thou, O LORD, art a shield for me; my glory, and the lifter up of mine head.',
  'Psalm 7:17': 'Psalm 7:17 — I will praise the LORD according to his righteousness: and will sing praise to the name of the LORD most high.',
  'Mark 12:29': 'Mark 12:29 — And Jesus answered him, The first of all the commandments is, Hear, O Israel; The Lord our God is one Lord.',
  'Deuteronomy 6:4': 'Deuteronomy 6:4 — Hear, O Israel: The LORD our God is one LORD.',
  'Psalm 18:2': 'Psalm 18:2 — The LORD is my rock, and my fortress, and my deliverer; my God, my strength, in whom I will trust; my buckler, and the horn of my salvation, and my high tower.',
  'Jeremiah 23:6': 'Jeremiah 23:6 — In his days Judah shall be saved, and Israel shall dwell safely: and this is his name whereby he shall be called, THE LORD OUR RIGHTEOUSNESS.',
  'Psalm 27:1': 'Psalm 27:1 — The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?',
  'Exodus 17:15': 'Exodus 17:15 — And Moses built an altar, and called the name of it Jehovah-nissi.',
  'Exodus 15:26': 'Exodus 15:26 — And said, If thou wilt diligently hearken to the voice of the LORD thy God, and wilt do that which is right in his sight, and wilt give ear to his commandments, and keep all his statutes, I will put none of these diseases upon thee, which I have brought upon the Egyptians.',
  'Psalm 23:1': 'Psalm 23:1 — The LORD is my shepherd; I shall not want.',
  'Leviticus 20:8': 'Leviticus 20:8 — And ye shall keep my statutes, and do them: I am the LORD which sanctify you.',
  'Exodus 31:13': 'Exodus 31:13 — Speak thou also unto the children of Israel, saying, Verily my sabbaths ye shall keep: for it is a sign between me and you throughout your generations; that ye may know that I am the LORD that doth sanctify you.',
  '1 Samuel 1:3': '1 Samuel 1:3 — And this man went up out of his city yearly to worship and to sacrifice unto the LORD of hosts in Shiloh. And the two sons of Eli, Hophni and Phinehas, the priests of the LORD, were there.',
  'Ezekiel 48:35': 'Ezekiel 48:35 — It was round about eighteen thousand measures: and the name of the city from that day shall be, The LORD is there.',
  'Judges 6:12': 'Judges 6:12 — And the angel of the LORD appeared unto him, and said unto him, The LORD is with thee, thou mighty man of valour.',
  'Joshua 3:13': 'Joshua 3:13 — And it shall come to pass, as soon as the soles of the feet of the priests that bear the ark of the LORD, the Lord of all the earth, shall rest in the waters of Jordan, that the waters of Jordan shall be cut off from the waters that come down from above.',
  'Psalm 28:7': 'Psalm 28:7 — The LORD is my strength and my shield; my heart trusted in him, and I am helped: therefore my heart greatly rejoiceth; and with my song will I praise him.',
  'Deuteronomy 33:29': 'Deuteronomy 33:29 — Happy art thou, O Israel: who is like unto thee, O people saved by the LORD, the shield of thy help, and who is the sword of thy excellency! and thine enemies shall be found liars unto thee; and thou shalt tread upon their high places.',
  'Isaiah 49:26': 'Isaiah 49:26 — And I will feed them that oppress thee with their own flesh; and they shall be drunken with their own blood, as with sweet wine: and all flesh shall know that I the LORD am thy Saviour and thy Redeemer, the mighty One of Jacob.',
  'Isaiah 60:16': 'Isaiah 60:16 — Thou shalt also suck the milk of the Gentiles, and shalt suck the breast of kings: and thou shalt know that I the LORD am thy Saviour and thy Redeemer, the mighty One of Jacob.',
  'Psalm 20:9': 'Psalm 20:9 — Save, LORD: let the king hear us when we call.',
  'Exodus 34:14': 'Exodus 34:14 — For thou shalt worship no other god: for the LORD, whose name is Jealous, is a jealous God.',
  'Psalm 91:9': 'Psalm 91:9 — Because thou hast made the LORD, which is my refuge, even the most High, thy habitation.',
  'Jeremiah 16:19': 'Jeremiah 16:19 — O LORD, my strength, and my fortress, and my refuge in the day of affliction, the Gentiles shall come unto thee from the ends of the earth, and shall say, Surely our fathers have inherited lies, vanity, and things wherein there is no profit.',
  'Ezekiel 7:9': 'Ezekiel 7:9 — And mine eye shall not spare, neither will I have pity: I will recompense thee according to thy ways and thine abominations that are in the midst of thee; and ye shall know that I am the LORD that smiteth.',
  'Quran 60:8': 'Qur\'an 60:8 — Allah does not forbid you from dealing kindly and fairly with those who have neither fought nor driven you out of your homes. Surely Allah loves those who are fair.',
  'Quran 5:32': 'Qur\'an 5:32 — Whoever kills a soul unless for a soul or for corruption done in the land — it is as if he had slain mankind entirely.',
  'Quran 4:19': 'Qur\'an 4:19 — O you who believe! You are forbidden to inherit women against their will. Nor should you treat them with harshness, that you may take away part of the dowry you have given them, unless they commit a clear indecency.',
  'Quran 2:228': 'Qur\'an 2:228 — Women have rights similar to those of men equitably, although men have a degree of responsibility above them. And Allah is Almighty, All-Wise.',
  'Quran 2:256': 'Qur\'an 2:256 — There shall be no compulsion in religion.',
  'Quran 5:5': 'Qur\'an 5:5 — Today all good, pure foods have been made lawful for you. Similarly, the food of the People of the Book is permissible for you and yours is permissible for them.',
  'Quran 29:46': 'Qur\'an 29:46 — And do not argue with the People of the Scripture except in a way that is best, except for those who commit injustice among them, and say, "We believe in that which has been revealed to us and revealed to you; and our God and your God is one; and we are Muslims [submitting] to Him."',
  'Quran 22:78': 'Qur\'an 22:78 — And strive for Allah with the striving due to Him. He has chosen you and has not placed upon you in the religion any difficulty. It is the religion of your father, Abraham.',
  'Quran 19:30': 'Qur\'an 19:30 — Jesus said, "Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet."',
  'Quran 39:9': 'Qur\'an 39:9 — Say, "Are those who know equal to those who do not know?" None will be mindful of this except people of reason.'
};

function collectVerses(text){
  const normalized = String(text || '').replace(/Qur'an/g, 'Quran');
  const refs = [];
  Object.keys(verseTexts).forEach(ref => {
    const alt = ref.replace('Psalm', 'Psa').replace('Genesis', 'Gen').replace('Judges', 'Judg').replace('Deuteronomy', 'Deut').replace('Exodus', 'Ex').replace('Isaiah', 'Isa').replace('Jeremiah', 'Jer').replace('Leviticus', 'Lev').replace('1 Samuel', '1 Sam').replace('Ezekiel', 'Ezek').replace('Joshua', 'Josh').replace('Mark', 'Mk').replace('Quran', 'Qur\'an');
    if(normalized.includes(ref) || normalized.includes(alt)) refs.push(verseTexts[ref]);
  });
  return [...new Set(refs)];
}

function renderVerseList(text){
  const verses = collectVerses(text);
  if(!verses.length) return '';
  return '<section class="deep-section verses"><h3>Full Verse Text</h3>' + verses.map(v => '<p>' + v + '</p>').join('') + '</section>';
}

const misconceptions = [
{title:'Muslims are terrorists or support violence',body:'Islam is a religion of peace and mercy that does not condone terrorism. Murder is treated as a major sin in Islamic teaching.',quote:'Qur\'an 5:32 — Whoever kills a soul unless for a soul or for corruption done in the land — it is as if he had slain mankind entirely.'},
{title:'Muslim women are oppressed',body:'This section distinguishes Islamic teaching from cultural practices that may mistreat women. It notes that Islam historically promoted women\'s rights including property ownership, divorce rights, and inheritance.',quote:'Qur\'an 4:19 — O you who believe! You are forbidden to inherit women against their will.'},
{title:'Islam was spread only by the sword',body:'This section explains that Islam also spread through trade and peaceful missionary work, especially in places such as Indonesia and sub-Saharan Africa where peaceful conversion was common.',quote:'Historical evidence shows diverse methods of Islamic expansion including commerce and cultural influence.'},
{title:'All Muslims are Arabs',body:'Only a portion of Muslims worldwide are Arabs. Large Muslim populations live in Indonesia, Pakistan, India, and Bangladesh.',quote:'Islam is presented as a universal religion transcending ethnicity and geography.'},
{title:'Islam is intolerant of other religions',body:'This section explains that Islam recognizes Jews and Christians as "People of the Book" and acknowledges shared Abrahamic heritage.',quote:'Qur\'an 29:46 — And do not argue with the People of the Scripture except in a way that is best.'},
{title:'Jihad only means holy war',body:'This section explains that jihad can mean struggle in the path of God and often refers to internal spiritual struggle.',quote:'Qur\'an 22:78 describes striving and effort as part of faith; the greater jihad refers to inner spiritual struggle.'},
{title:'Muslims do not respect Jesus',body:'Islam honors Jesus, or Isa, as a highly respected prophet, affirms his miraculous birth, and identifies him as Messiah.',quote:'Qur\'an 19:30 shows Jesus affirming his servitude to Allah and his role as prophet.'},
{title:'Sharia law is only barbaric',body:'This section defines Sharia as a moral and legal framework connected to prayer, fasting, charity, justice, and daily life. Its application varies and is influenced by culture and interpretation.',quote:'Sharia encompasses ethical guidance, family law, commerce, and principles of justice.'},
{title:'Islam is anti-science',body:'This section points to the Golden Age of Islam, when Muslim scholars contributed to medicine, mathematics, astronomy, and philosophy.',quote:'Qur\'an 39:9 values knowledge — Say, "Are those who know equal to those who do not know?"'}
];

const quizQuestions = [
{name:'Jehovah Rapha',answer:'Christian',hint:'The Lord Who Heals'},
{name:'Jehovah Raah',answer:'Christian',hint:'The Lord My Shepherd'},
{name:'El-Shaddai',answer:'Christian',hint:'God Almighty'},
{name:'Ar-Rahman',answer:'Shared',hint:'The Beneficent; connected with divine mercy'},
{name:'Al-Malik',answer:'Shared',hint:'The King; connected with King of Kings'},
{name:'As-Salam',answer:'Shared',hint:'The Giver of Peace; connected with Jehovah Shalom'},
{name:'Al-Quddus',answer:'Islamic',hint:'The Most Holy'},
{name:'Al-Mumin',answer:'Islamic',hint:'The Infuser of Faith'},
{name:'Al-Musawwir',answer:'Islamic',hint:'The Flawless Shaper'},
{name:'As-Sabur',answer:'Islamic',hint:'The Extensively Enduring One'}
];

const grid = document.querySelector('#islamicNamesGrid');
const search = document.querySelector('#searchNames');
const filter = document.querySelector('#nameFilter');

function renderIslamicNames(){
  const term = search.value.toLowerCase();
  const f = filter.value;
  const filtered = islamicNames.filter(item => {
    const haystack = `${item.arabic} ${item.name} ${item.meaning} ${item.theology} ${item.connection}`.toLowerCase();
    const matchesSearch = haystack.includes(term);
    const matchesFilter = f === 'all' || (f === 'shared' ? item.connection : item.tags.includes(f));
    return matchesSearch && matchesFilter;
  });
  grid.innerHTML = filtered.map(item => `
    <article class="name-card ${item.connection ? 'has-connection' : ''}" data-name-number="${item.n}" tabindex="0" role="button" aria-label="Open definition for ${item.name}">
      <div class="card-top"><span class="number">${item.n}</span><span class="arabic">${item.arabic}</span></div>
      <h3>${item.name}</h3>
      <p class="meaning">${item.meaning}</p>
      ${item.connection ? `<p class="connection"><strong>Christian connection:</strong> ${item.connection}</p>` : ''}
    </article>
  `).join('') || '<p class="empty">No names match your search.</p>';
  document.querySelectorAll('#islamicNamesGrid .name-card').forEach(card => {
    card.addEventListener('click', () => openIslamicDefinition(card.dataset.nameNumber));
    card.addEventListener('keydown', event => {
      if(event.key === 'Enter' || event.key === ' '){ event.preventDefault(); openIslamicDefinition(card.dataset.nameNumber); }
    });
  });
}

function renderChristianNames(){
  document.querySelector('#christianNamesGrid').innerHTML = christianNames.map(([name,meaning,theology], index) => `
    <article class="name-card christian-card" data-christian-index="${index}" tabindex="0" role="button" aria-label="Open definition for ${name}">
      <h3>${name}</h3>
      <p class="meaning">${meaning}</p>
    </article>
  `).join('');
  document.querySelectorAll('#christianNamesGrid .name-card').forEach(card => {
    card.addEventListener('click', () => openChristianDefinition(card.dataset.christianIndex));
    card.addEventListener('keydown', event => {
      if(event.key === 'Enter' || event.key === ' '){ event.preventDefault(); openChristianDefinition(card.dataset.christianIndex); }
    });
  });
}


const modal = document.querySelector('#theologyModal');
const modalContent = document.querySelector('#modalContent');
const closeModalButton = document.querySelector('#closeTheologyModal');

function openModal(html){
  modalContent.innerHTML = html;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  closeModalButton.focus();
}
function closeModal(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}
function openIslamicDefinition(number){
  const item = islamicNames.find(name => name.n === Number(number));
  if(!item) return;
  const verseSource = `${item.connection} ${item.theology}`;
  openModal(`
    <p class="modal-eyebrow">Name ${item.n} of 99</p>
    <div class="modal-heading-row">
      <div><h2 id="modalTitle">${item.name}</h2><p class="modal-meaning">${item.meaning}</p></div>
      <p class="modal-arabic" lang="ar" dir="rtl">${item.arabic}</p>
    </div>
    <div class="deep-grid">
      <section class="deep-section"><h3>Definition</h3><p>${item.theology}</p></section>
      ${item.connection ? `<section class="deep-section"><h3>Christian Connection</h3><p>${item.connection}</p></section>` : ''}
      ${renderVerseList(verseSource)}
    </div>
  `);
}
function openChristianDefinition(index){
  const item = christianNames[Number(index)];
  if(!item) return;
  const [name, meaning, theology] = item;
  openModal(`
    <p class="modal-eyebrow">Christian Name for God</p>
    <div class="modal-heading-row"><div><h2 id="modalTitle">${name}</h2><p class="modal-meaning">${meaning}</p></div></div>
    <div class="deep-grid">
      <section class="deep-section"><h3>Definition</h3><p>${theology}</p></section>
      ${renderVerseList(`${meaning} ${theology}`)}
    </div>
  `);
}

function renderMisconceptions(){
  document.querySelector('#misconceptionsList').innerHTML = misconceptions.map((m,i) => `
    <article class="accordion-item">
      <button class="accordion-trigger" aria-expanded="${i===0 ? 'true':'false'}">
        <span>${m.title}</span><span>+</span>
      </button>
      <div class="accordion-panel ${i===0 ? 'open':''}">
        <p>${m.body}</p>
        <p class="quote">${m.quote}</p>${renderVerseList(`${m.title} ${m.body} ${m.quote}`)}
      </div>
    </article>
  `).join('');
  document.querySelectorAll('.accordion-trigger').forEach(btn => btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const open = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  }));
}

function shuffleQuestions(list){
  const arr = [...list];
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
let activeQuizQuestions = shuffleQuestions(quizQuestions);
let current = 0, score = 0, answered = false;
function renderQuiz(){
  const q = activeQuizQuestions[current];
  document.querySelector('#quizProgress').textContent = `Question ${current + 1} of ${activeQuizQuestions.length}`;
  document.querySelector('#quizScore').textContent = `Score: ${score}`;
  document.querySelector('#quizName').textContent = q.name;
  document.querySelector('#quizHint').textContent = q.hint;
  document.querySelector('#quizFeedback').textContent = '';
  answered = false;
  document.querySelector('#quizOptions').innerHTML = ['Christian','Shared','Islamic'].map(opt => `<button class="option" data-answer="${opt}">${opt}</button>`).join('');
  document.querySelectorAll('.option').forEach(btn => btn.addEventListener('click', () => checkAnswer(btn)));
}
function checkAnswer(btn){
  if(answered) return;
  answered = true;
  const q = activeQuizQuestions[current];
  const correct = btn.dataset.answer === q.answer;
  if(correct) score++;
  document.querySelectorAll('.option').forEach(b => {
    b.disabled = true;
    if(b.dataset.answer === q.answer) b.classList.add('correct');
  });
  if(!correct) btn.classList.add('wrong');
  document.querySelector('#quizFeedback').textContent = correct ? 'Correct.' : `Not quite. The answer is ${q.answer}.`;
  document.querySelector('#quizScore').textContent = `Score: ${score}`;
}
function finishQuiz(){
  document.querySelector('#quizName').textContent = `Final score: ${score}/${activeQuizQuestions.length}`;
  document.querySelector('#quizHint').textContent = score >= 8 ? 'Excellent work recognizing the names.' : 'Review the name cards below and try again.';
  document.querySelector('#quizOptions').innerHTML = '';
  document.querySelector('#quizFeedback').textContent = '';
  document.querySelector('#nextQuestion').classList.add('hidden');
  document.querySelector('#restartQuiz').classList.remove('hidden');
}

document.querySelector('#nextQuestion').addEventListener('click', () => {
  if(current < activeQuizQuestions.length - 1){ current++; renderQuiz(); } else finishQuiz();
});
document.querySelector('#restartQuiz').addEventListener('click', () => {
  activeQuizQuestions = shuffleQuestions(quizQuestions);
  current = 0; score = 0;
  document.querySelector('#nextQuestion').classList.remove('hidden');
  document.querySelector('#restartQuiz').classList.add('hidden');
  renderQuiz();
});
document.querySelector('.nav-toggle').addEventListener('click', e => {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('show');
  e.currentTarget.setAttribute('aria-expanded', links.classList.contains('show'));
});
closeModalButton.addEventListener('click', closeModal);
modal.addEventListener('click', event => { if(event.target === modal) closeModal(); });
document.addEventListener('keydown', event => { if(event.key === 'Escape' && modal.classList.contains('show')) closeModal(); });
search.addEventListener('input', renderIslamicNames);
filter.addEventListener('change', renderIslamicNames);
renderIslamicNames();
renderChristianNames();
renderMisconceptions();
renderQuiz();