const islamicNames = [{"n": 1, "arabic": "ٱلرَّحْمَـٰنُ", "name": "Ar-Rahman", "meaning": "The Beneficent", "definition": "he who wills goodness and mercy for all His creatures.", "connection": "The LORD God, merciful, Exodus 34:6, Deuteronomy 4:31", "tags": ["mercy", "shared"]}, {"n": 2, "arabic": "ٱلرَّحِيمُ", "name": "Ar-Raheem", "meaning": "The Merciful", "definition": "He who acts with extreme kindness", "connection": "", "tags": ["mercy"]}, {"n": 3, "arabic": "ٱلْمَلِكُ", "name": "Al-Malik", "meaning": "The King", "definition": "The Sovereign Lord, The One with the complete Dominion, the One Whose Dominion is clear from imperfection.", "connection": "The King of Kings; Jehovah-Hamelech. Lord King. Psalm 98:6, Psalm 10:16", "tags": ["power", "shared"]}, {"n": 4, "arabic": "ٱلْقُدُّوسُ", "name": "Al-Quddus", "meaning": "The Most Sacred/ The Most Holy", "definition": "The one who is pure, so far removed of any imperfection. He has no shortcomings, evil is not attributed to Him.", "connection": "", "tags": ["guidance"]}, {"n": 5, "arabic": "ٱلسَّلَامُ", "name": "As-Salam", "meaning": "The Giver of Peace", "definition": "The One who is free from every imperfection. It is because He is free of any defect that one who is with Him experiences tranquility.", "connection": "Jehovah Shalom, The Lord is Peace Judges 6:24", "tags": ["guidance", "shared"]}, {"n": 6, "arabic": "ٱلْمُؤْمِنُ", "name": "Al-Mumin", "meaning": "The Infuser of Faith", "definition": "The One who witnessed for Himself that no one is God but Him. And He witnessed for His believers that they are truthful in their belief that no one is God but Him.", "connection": "", "tags": ["guidance"]}, {"n": 7, "arabic": "ٱلْمُهَيْمِنُ", "name": "Al-Muhaymin", "meaning": "The Guardian", "definition": "The One who witnesses the saying and deeds of His creatures.", "connection": "", "tags": ["guidance"]}, {"n": 8, "arabic": "ٱلْعَزِيزُ", "name": "Al-Aziz", "meaning": "The Mighty One", "definition": "The Strong, The Defender who is not defeated.", "connection": "Jehovah-Ganan. Lord Our Defense. Psalm 89:18; Jehovah-’Izoa Hakaboth. Lord Strong and Mighty. Psalm 24:8", "tags": ["power", "shared"]}, {"n": 9, "arabic": "ٱلْجَبَّارُ", "name": "Al-Jabbar", "meaning": "The All Compelling", "definition": "The One that nothing happens in His Domain except that which He willed.", "connection": "", "tags": ["power"]}, {"n": 10, "arabic": "ٱلْمُتَكَبِّرُ", "name": "Al-Mutakabbir", "meaning": "The Dominant One", "definition": "The One who is clear from the attributes of the creatures and from resembling them.", "connection": "", "tags": ["power"]}, {"n": 11, "arabic": "ٱلْخَالِقُ", "name": "Al-Khaliq", "meaning": "The Creator", "definition": "The One who brings everything from non-existence to existence.", "connection": "Jehovah Elohim, Eternal Creator. Gensis 2:4; Jehovah-Bara. Isaiah 40:28", "tags": ["power", "shared"]}, {"n": 12, "arabic": "ٱلْبَارِئُ", "name": "Al-Bari", "meaning": "The Evolver/The Maker", "definition": "The Maker, The Creator who has the Power to turn the entities.", "connection": "", "tags": ["power"]}, {"n": 13, "arabic": "ٱلْمُصَوِّرُ", "name": "Al-Musawwir", "meaning": "The Flawless Shaper", "definition": "The One who forms His creatures in different pictures.", "connection": "", "tags": ["guidance"]}, {"n": 14, "arabic": "ٱلْغَفَّارُ", "name": "Al-Ghaffar", "meaning": "The Great Forgiver", "definition": "The Forgiver, The One who forgives the sins of His slaves time and time again.", "connection": "", "tags": ["mercy"]}, {"n": 15, "arabic": "ٱلْقَهَّارُ", "name": "Al-Qahhar", "meaning": "The All-Prevailing One", "definition": "The Dominant, The One who has the perfect Power and is not unable over anything.", "connection": "", "tags": ["power"]}, {"n": 16, "arabic": "ٱلْوَهَّابُ", "name": "Al-Wahhab", "meaning": "The Supreme Bestower", "definition": "The One who is Generous in giving plenty without any return. He is everything that benefits whether Halal or Haram.", "connection": "", "tags": ["mercy"]}, {"n": 17, "arabic": "ٱلرَّزَّاقُ", "name": "Ar-Razzaq", "meaning": "The Total Provider", "definition": "The Sustainer, The Provider.", "connection": "Jehovah Jirah: The Lord Will Provide, Genesis 22:14", "tags": ["mercy", "shared"]}, {"n": 18, "arabic": "ٱلْفَتَّاحُ", "name": "Al-Fattah", "meaning": "The Opener", "definition": "The Solver, The Reliever, The Judge, The One who opens for His slaves the closed worldly and religious matters.", "connection": "", "tags": ["guidance"]}, {"n": 19, "arabic": "ٱلْعَلِيمُ", "name": "Al-Alim", "meaning": "The All-Knowing One", "definition": "The Knowledgeable; The One nothing is absent from His knowledge.", "connection": "", "tags": ["guidance"]}, {"n": 20, "arabic": "ٱلْقَابِضُ", "name": "Al-Qabid", "meaning": "The Restricting One", "definition": "The Constrictor, The Withholder, The One who constricts the sustenance by His wisdom and expands and widens it with His Generosity and Mercy.", "connection": "", "tags": ["mercy"]}, {"n": 21, "arabic": "ٱلْبَاسِطُ", "name": "Al-Basit", "meaning": "The Extender", "definition": "The Englarger, The One who constricts the sustenance by His wisdom and expands and widens it with His Generosity and Mercy.", "connection": "", "tags": ["mercy"]}, {"n": 22, "arabic": "ٱلْخَافِضُ", "name": "Al-Khafid", "meaning": "The Reducer", "definition": "The Abaser, The One who lowers whoever He willed by His Destruction and raises whoever He willed by His Endowment.", "connection": "", "tags": ["guidance"]}, {"n": 23, "arabic": "ٱلرَّافِعُ", "name": "Ar-Rafi", "meaning": "The Elevating One", "definition": "The Exalter, The Elevator, The One who lowers whoever He willed by His Destruction and raises whoever He willed by His Endowment.", "connection": "", "tags": ["guidance"]}, {"n": 24, "arabic": "ٱلْمُعِزُّ", "name": "Al-Mu'izz", "meaning": "The Honourer-Bestower", "definition": "He gives esteem to whoever He willed, hence there is no one to degrade Him; And He degrades whoever He willed, hence there is no one to give Him esteem.", "connection": "", "tags": ["mercy"]}, {"n": 25, "arabic": "ٱلْمُذِلُّ", "name": "Al-Muzil", "meaning": "The Abaser", "definition": "The Dishonourer, The Humiliator, He gives esteem to whoever He willed, hence there is no one to degrade Him; And He degrades whoever He willed, hence there is no one to give Him esteem.", "connection": "", "tags": ["guidance"]}, {"n": 26, "arabic": "ٱلسَّمِيعُ", "name": "As-Sami", "meaning": "The All-Hearer", "definition": "The Hearer, The One who hears all things that are heard by His Eternal Hearing without an ear, instrument or organ.", "connection": "", "tags": ["guidance"]}, {"n": 27, "arabic": "ٱلْبَصِيرُ", "name": "Al-Baseer", "meaning": "The All-Seeing", "definition": "The All-Noticing, The One who Sees all things that are seen by His Eternal Seeing without a pupil or any other instrument.", "connection": "Jehovah Roi. Genesis 16:13", "tags": ["guidance", "shared"]}, {"n": 28, "arabic": "ٱلْحَكَمُ", "name": "Al-Hakam", "meaning": "The Impartial Judge", "definition": "The Judge, He is the Ruler and The Judge, He is the Ruler and His judgement is His Word.", "connection": "Jehovah-Hashopet, Lord My Judge. Judges 11:27", "tags": ["guidance", "shared"]}, {"n": 29, "arabic": "ٱلْعَدْلُ", "name": "Al-Adl", "meaning": "The Embodiment of Justice", "definition": "The Just, The One who is entitled to do what He does.", "connection": "", "tags": ["guidance"]}, {"n": 30, "arabic": "ٱللَّطِيفُ", "name": "Al-Lateef", "meaning": "The Knower of Subtleties", "definition": "The Subtle One, The Gracious, The One who is kind to His slaves and endows upon them.", "connection": "", "tags": ["mercy"]}, {"n": 31, "arabic": "ٱلْخَبِيرُ", "name": "Al-Khabir", "meaning": "The All-Aware One", "definition": "The One who knows the truth of things.", "connection": "I Am That I Am", "tags": ["guidance", "shared"]}, {"n": 32, "arabic": "ٱلْحَلِيمُ", "name": "Al-Haleem", "meaning": "The Clement One", "definition": "The forebearing, The One who delays the punishment for those who deserve it and then He might forgive them.", "connection": "", "tags": ["mercy"]}, {"n": 33, "arabic": "ٱلْعَظِيمُ", "name": "Al-Azeem", "meaning": "The Magnificent One", "definition": "The Great One, The Mighty, The One deserving the attributes of Exaltment, Glory, Extolement, and Purity from all imperfection.", "connection": "I Am That I Am; Jehovah-Kabodhi. Pslam 3:3", "tags": ["power", "shared"]}, {"n": 34, "arabic": "ٱلْغَفُورُ", "name": "Al-Ghafoor", "meaning": "The All-Forgiving", "definition": "The All-Forgiving, The Forgiving, The One who forgives a lot.", "connection": "", "tags": ["mercy"]}, {"n": 35, "arabic": "ٱلشَّكُورُ", "name": "Ash-Shakur", "meaning": "The Acknowledgment One", "definition": "The Grateful, The Appreciative, The One who gives a lot of reward for a little obedience.", "connection": "", "tags": ["guidance"]}, {"n": 36, "arabic": "ٱلْعَلِيُّ", "name": "Al-Aliyy", "meaning": "The Sublime One", "definition": "The Most High, The One who is clear from the attributes of the creatures.", "connection": "Jehovah El Elyon: The Lord Most High. Psalm 7:17", "tags": ["shared"]}, {"n": 37, "arabic": "ٱلْكَبِيرُ", "name": "Al-Kabeer", "meaning": "The Great One", "definition": "The Most Great, The Great, The One who is greater than everything in status.", "connection": "", "tags": ["guidance"]}, {"n": 38, "arabic": "ٱلْحَفِيظُ", "name": "Al-Hafiz", "meaning": "The Guarding One", "definition": "The Preserver, The Protector, The One who protects whatever and whoever He willed to protect.", "connection": "", "tags": ["guidance"]}, {"n": 39, "arabic": "ٱلْمُقِيتُ", "name": "Al-Muqeet", "meaning": "The Sustaining One", "definition": "The Maintainer, The Guardian, The Feeder, The One who has the Power.", "connection": "", "tags": ["power"]}, {"n": 40, "arabic": "ٱلْحَسِيبُ", "name": "Al-Haseeb", "meaning": "The Reckoning One", "definition": "The Reckoner, The One who gives the satisfaction.", "connection": "", "tags": ["guidance"]}, {"n": 41, "arabic": "ٱلْجَلِيلُ", "name": "Al-Jaleel", "meaning": "The Majestic One", "definition": "The Sublime One, The Beneficent, The One who is attributed with greatness of Power and Glory of status.", "connection": "", "tags": ["mercy", "power"]}, {"n": 42, "arabic": "ٱلْكَرِيمُ", "name": "Al-Karim", "meaning": "The Bountiful One", "definition": "The Generous One, The Gracious, The One who is attributed with greatness of Power and Glory of status.", "connection": "", "tags": ["mercy", "power"]}, {"n": 43, "arabic": "ٱلرَّقِيبُ", "name": "Ar-Raqib", "meaning": "The Watchful One", "definition": "The Watcher, The One that nothing is absent from Him. Hence, its meaning is related to attribute of Knowledge.", "connection": "", "tags": ["guidance"]}, {"n": 44, "arabic": "ٱلْمُجِيبُ", "name": "Al-Mujeeb", "meaning": "The Responding One", "definition": "The Responsive, The Hearkener, The One who answers the one in need if he asks Him and rescues the yearned if he calls upon Him.", "connection": "", "tags": ["guidance"]}, {"n": 45, "arabic": "ٱلْوَاسِعُ", "name": "Al-Wasi", "meaning": "The All-Pervading One", "definition": "The Vast, The All-Embracing, The Knowledgeable.", "connection": "", "tags": ["guidance"]}, {"n": 46, "arabic": "ٱلْحَكِيمُ", "name": "Al-Hakeem", "meaning": "The Wise One", "definition": "The Wise, The Judge of Judges, The One who is correct in His doings.", "connection": "", "tags": ["guidance"]}, {"n": 47, "arabic": "ٱلْوَدُودُ", "name": "Al-Wadud", "meaning": "The Loving One", "definition": "The Most Loving, The Most Affectionate, The Beloved.", "connection": "", "tags": ["mercy"]}, {"n": 48, "arabic": "ٱلْمَجِيدُ", "name": "Al-Majeed", "meaning": "The Glorious One", "definition": "The Most Glorious One, The One who is with perfect Power, High Status, Compassion, Generosity and Kindness.", "connection": "", "tags": ["mercy", "power"]}, {"n": 49, "arabic": "ٱلْبَاعِثُ", "name": "Al-Ba'ith", "meaning": "The Infuser of New Life", "definition": "The Awakener, The Resurrector, The Arouser.", "connection": "", "tags": ["guidance"]}, {"n": 50, "arabic": "ٱلشَّهِيدُ", "name": "Ash-Shaheed", "meaning": "The All Observing Witness", "definition": "The Witness, The One who nothing is absent from Him.", "connection": "", "tags": ["guidance"]}, {"n": 51, "arabic": "ٱلْحَقُّ", "name": "Al-Haqq", "meaning": "The Embodiment of Truth", "definition": "The Truth, The True, The One who truly exists.", "connection": "I Am That I Am", "tags": ["guidance", "shared"]}, {"n": 52, "arabic": "ٱلْوَكِيلُ", "name": "Al-Wakeel", "meaning": "The Universal Trustee", "definition": "The Trustee, The One who gives the satisfaction and is relied upon.", "connection": "", "tags": ["guidance"]}, {"n": 53, "arabic": "ٱلْقَوِيُّ", "name": "Al-Qawiyy", "meaning": "The Strong One", "definition": "The Most Strong, The Strong, The One with the complete Power.", "connection": "", "tags": ["power"]}, {"n": 54, "arabic": "ٱلْمَتِينُ", "name": "Al-Matin", "meaning": "The Firm One", "definition": "The One with extreme Power which is un-interrupted and He does not get tired.", "connection": "", "tags": ["power"]}, {"n": 55, "arabic": "ٱلْوَلِيُّ", "name": "Al-Waliy", "meaning": "The Protecting Associate", "definition": "The Protecting Friend, The Supporter.", "connection": "", "tags": ["guidance"]}, {"n": 56, "arabic": "ٱلْحَمِيدُ", "name": "Al-Hameed", "meaning": "The Sole-Laudable One", "definition": "The Praiseworthy, The praised One who deserves to be praised.", "connection": "", "tags": ["guidance"]}, {"n": 57, "arabic": "ٱلْمُحْصِي", "name": "Al-Muhsi", "meaning": "The All-Enumerating One", "definition": "The Counter, The Reckoner, The One who the count of things are known to him.", "connection": "", "tags": ["guidance"]}, {"n": 58, "arabic": "ٱلْمُبْدِئُ", "name": "Al-Mubdi", "meaning": "The Originator", "definition": "The One who started the human being. That is, He created him.", "connection": "", "tags": ["guidance"]}, {"n": 59, "arabic": "ٱلْمُعِيدُ", "name": "Al-Muid", "meaning": "The Restorer", "definition": "The Reproducer, The One who brings back the creatures after death.", "connection": "", "tags": ["guidance"]}, {"n": 60, "arabic": "ٱلْمُحْيِي", "name": "Al-Muhyi", "meaning": "The Maintainer of Life", "definition": "The Restorer, The Giver of Life.", "connection": "", "tags": ["guidance"]}, {"n": 61, "arabic": "ٱلْمُمِيتُ", "name": "Al-Mumeet", "meaning": "The Inflictor of Death", "definition": "The Creator of Death, The Destroyer, The One who renders the living dead.", "connection": "", "tags": ["power"]}, {"n": 62, "arabic": "ٱلْحَيُّ", "name": "Al-Hayy", "meaning": "The Eternally Living One", "definition": "The Alive, The One attributed with a life that is unlike our life and is not that of a combination of soul, flesh or blood.", "connection": "I Am That I Am", "tags": ["shared"]}, {"n": 63, "arabic": "ٱلْقَيُّومُ", "name": "Al-Qayyum", "meaning": "The Self-Subsisting One", "definition": "The Self-Subsisting, The Self-Existing One upon Whom all others depend.", "connection": "I Am That I Am", "tags": ["shared"]}, {"n": 64, "arabic": "ٱلْوَاجِدُ", "name": "Al-Wajid", "meaning": "The Pointing One", "definition": "The Perceiver, The Finder, The Rich who is never poor. Al-Wajid is Richness.", "connection": "", "tags": ["guidance"]}, {"n": 65, "arabic": "ٱلْمَاجِدُ", "name": "Al-Maajid", "meaning": "The All-Noble One", "definition": "The Glorious, He who is Most Glorious.", "connection": "", "tags": ["guidance"]}, {"n": 66, "arabic": "ٱلْوَاحِدُ", "name": "Al-Wahid", "meaning": "The Only One", "definition": "The Unique, The One, The One without a partner.", "connection": "", "tags": ["guidance"]}, {"n": 67, "arabic": "ٱلْأَحَدُ", "name": "Al-Ahad", "meaning": "The Sole One", "definition": "The One.", "connection": "Lord our God is One, Mark 12:29, Deuteronomy 6:4; Jehovah-Eli. Psalm 18:2", "tags": ["shared"]}, {"n": 68, "arabic": "ٱلصَّمَدُ", "name": "As-Samad", "meaning": "The Supreme Provider", "definition": "The Eternal, The Independent, The Master who is relied upon in matters and reverted to in ones needs. He is the only one a person should turn to when feeling helpless.", "connection": "Jehovah Jireh, I Am That I Am, Genesis 22:14", "tags": ["mercy", "shared"]}, {"n": 69, "arabic": "ٱلْقَادِرُ", "name": "Al-Qadir", "meaning": "The All-Powerful", "definition": "The Able, The Capable, The One attributed with Power.", "connection": "", "tags": ["power"]}, {"n": 70, "arabic": "ٱلْمُقْتَدِرُ", "name": "Al-Muqtadir", "meaning": "The All Authoritative One", "definition": "The Powerful, The Dominant, The One with the perfect Power that nothing is withheld from Him.", "connection": "", "tags": ["power"]}, {"n": 71, "arabic": "ٱلْمُقَدِّمُ", "name": "Al-Muqaddim", "meaning": "The Expediting One", "definition": "The Expediter, The Promoter, The One who puts things in their right places.", "connection": "", "tags": ["guidance"]}, {"n": 72, "arabic": "ٱلْمُؤَخِّرُ", "name": "Al-Muakhkhir", "meaning": "The Delayer", "definition": "The Postponer, He Who Puts Far Away. He makes ahead what He wills and delays what He wills.", "connection": "", "tags": ["guidance"]}, {"n": 73, "arabic": "ٱلْأَوَّلُ", "name": "Al-Awwal", "meaning": "The Very First", "definition": "The First, The One whose Existence is without a beginning.", "connection": "", "tags": ["power"]}, {"n": 74, "arabic": "ٱلْآخِرُ", "name": "Al-Akhir", "meaning": "The Infinite Last One", "definition": "The Last, The One whose Existence is without an end.", "connection": "", "tags": ["power"]}, {"n": 75, "arabic": "ٱلظَّاهِرُ", "name": "Az-Zaahir", "meaning": "The Perceptible", "definition": "The Manifest, The Conspicuous, The Evident.", "connection": "", "tags": ["guidance"]}, {"n": 76, "arabic": "ٱلْبَاطِنُ", "name": "Al-Baatin", "meaning": "The Imperceptible", "definition": "The Hidden, The Secret One, The Inner One, The Knower of Hidden Things.", "connection": "", "tags": ["guidance"]}, {"n": 77, "arabic": "ٱلْوَالِي", "name": "Al-Wali", "meaning": "The Holder of Supreme Authority", "definition": "The Governor, The One who owns things and manages them.", "connection": "", "tags": ["power"]}, {"n": 78, "arabic": "ٱلْمُتَعَالِي", "name": "Al-Mutaali", "meaning": "The Extremely Exalted One", "definition": "The Most Exalted, The High Exalted, The One who is clear from the attributes of the creation.", "connection": "", "tags": ["power"]}, {"n": 79, "arabic": "ٱلْبَرُّ", "name": "Al-Barr", "meaning": "The Fountain-Head of Truth", "definition": "The Sources of All Goodness, The Righteous, The One who is kind to His creatures.", "connection": "Jehovah Tsidkenu: The Lord Our Righteousness. Jeremiah 23:6", "tags": ["mercy", "guidance", "shared"]}, {"n": 80, "arabic": "ٱلتَّوَّابُ", "name": "At-Tawwab", "meaning": "The Ever-Acceptor of Repentance", "definition": "The Acceptor of Repentance, The Oft-Forgiving, The Acceptor of our Return.", "connection": "", "tags": ["mercy"]}, {"n": 81, "arabic": "ٱلْمُنْتَقِمُ", "name": "Al-Muntaqim", "meaning": "The Retaliator", "definition": "The Avenger, The Disapprover, The Inflictor of Retribution.", "connection": "", "tags": ["guidance"]}, {"n": 82, "arabic": "ٱلْعَفُوُّ", "name": "Al-Afuw", "meaning": "The Supreme Pardoner", "definition": "The Pardoner, The Forgiver and The Eliminator of Sins.", "connection": "", "tags": ["mercy"]}, {"n": 83, "arabic": "ٱلرَّؤُوفُ", "name": "Ar-Rauf", "meaning": "The Benign One", "definition": "The Most Kind, The Tenderly Merciful, The Clement and Compassionate.", "connection": "", "tags": ["mercy"]}, {"n": 84, "arabic": "مَالِكُ ٱلْمُلْكُ", "name": "Malikul-Mulk", "meaning": "The Eternal Possessor of Sovereignty", "definition": "The One who controls the Dominion and gives dominion to whoever He willed.", "connection": "", "tags": ["power"]}, {"n": 85, "arabic": "ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ", "name": "Dhul-Jalaali-Wal-Ikram", "meaning": "The Possessor of Majesty and Honour", "definition": "The Lord of Majesty and Bounty.", "connection": "", "tags": ["power"]}, {"n": 86, "arabic": "ٱلْمُقْسِطُ", "name": "Al-Muqsit", "meaning": "The Just One", "definition": "The Equitable, The One who is Just in His Judgement.", "connection": "", "tags": ["guidance"]}, {"n": 87, "arabic": "ٱلْجَامِعُ", "name": "Al-Jami", "meaning": "The Assembler of Scattered Creations", "definition": "The Gatherer, The One who gathers the creatures on a day that there is no doubt about, that is the Day of Judgement.", "connection": "", "tags": ["guidance"]}, {"n": 88, "arabic": "ٱلْغَنِيُّ", "name": "Al-Ghaniy", "meaning": "The Self-Sufficient One", "definition": "The One who does not need the creation.", "connection": "", "tags": ["guidance"]}, {"n": 89, "arabic": "ٱلْمُغْنِيُّ", "name": "Al-Mughni", "meaning": "The Enricher", "definition": "The Emancipator, The Fuller of Needs, The Bestower of Wealth.", "connection": "", "tags": ["mercy"]}, {"n": 90, "arabic": "ٱلْمَانِعُ", "name": "Al-Mani", "meaning": "The Preventer", "definition": "The Withholder.", "connection": "", "tags": ["guidance"]}, {"n": 91, "arabic": "ٱلضَّارُ", "name": "Ad-Darr", "meaning": "The Distressor", "definition": "The Corrector, The Balancer, The Distresser, The Afflicter, The Punisher.", "connection": "", "tags": ["guidance"]}, {"n": 92, "arabic": "ٱلنَّافِعُ", "name": "An-Naafi", "meaning": "The Bestower of Benefits", "definition": "The Creator of Good, The Benefiter, The Propitious, The Auspicious.", "connection": "", "tags": ["mercy", "power"]}, {"n": 93, "arabic": "ٱلنُّورُ", "name": "An-Noor", "meaning": "The Prime Light", "definition": "The Light, The One who guides.", "connection": "Jehovah-’Ori: Lord My Light. Psalm 27:1", "tags": ["guidance", "shared"]}, {"n": 94, "arabic": "ٱلْهَادِي", "name": "Al-Hadi", "meaning": "The Provider of Guidance", "definition": "The Guide, The Leader, The Guide of the Right Path.", "connection": "Jehovah Nissi: The Lord My Banner. Our victory flag, He who leads us, covers us and wins the fight before we even begin. Exodus 17:15.", "tags": ["mercy", "guidance", "shared"]}, {"n": 95, "arabic": "ٱلْبَدِيعُ", "name": "Al-Badi", "meaning": "The Unique One", "definition": "The Wonderful Originator, The Unprecedented and Incomparable Inventor.", "connection": "", "tags": ["guidance"]}, {"n": 96, "arabic": "ٱلْبَاقِي", "name": "Al-Baaqi", "meaning": "The Ever Surviving One", "definition": "The Everlasting, The Ever-Enduring, The Ever-Present.", "connection": "", "tags": ["power"]}, {"n": 97, "arabic": "ٱلْوَارِثُ", "name": "Al-Warith", "meaning": "The Eternal Inheritor", "definition": "The Heir, The One whose Existence remains.", "connection": "", "tags": ["guidance"]}, {"n": 98, "arabic": "ٱلرَّشِيدُ", "name": "Ar-Rasheed", "meaning": "The Guide to Path of Rectitude", "definition": "The Guide to the Right Path, The One who guides.", "connection": "", "tags": ["guidance"]}, {"n": 99, "arabic": "ٱلصَّبُورُ", "name": "As-Sabur", "meaning": "The Extensively Enduring One", "definition": "The Patient, The One who does not quickly punish the sinners.", "connection": "", "tags": ["guidance"]}];

const christianNames = [{"name": "El-Shaddai", "meaning": "God Almighty", "definition": "God Almighty"}, {"name": "Ehyeh Asher Ehyeh", "meaning": "I AM THAT I AM", "definition": "indicates Al-Ahad, As-Samad, Al-Hayy, Al-Qayyum, Al-Azim (The Great One), Al-Haqq and Al-Khabir in the Qur’an."}, {"name": "YHWH", "meaning": "Jehovah", "definition": "indicates Allah, Al-Ahad, As-Samad, Al-Hayy, Al-Qayyum, Al-Azim (The Great One), Al-Haqq, and Al-Khabir in the Qur’an"}, {"name": "Adonai", "meaning": "Lord", "definition": "Lord"}, {"name": "Jehovah Rapha", "meaning": "The Lord Who Heals", "definition": "Exodus 15:26 [More common in Judaism]"}, {"name": "Jehovah Raah", "meaning": "The Lord My Shepherd", "definition": "Psalm 23:1, protector, guide, leader, provider."}, {"name": "Jehovah Mekoddishkem", "meaning": "The Lord Who Sanctifies You", "definition": "He who makes you Holy. Leviticus 20:8, Exodus 31:13)"}, {"name": "Jehovah Sabaoth", "meaning": "The Lord of Hosts", "definition": "He who leads Heaven’s armies; when He fights for you, no weapon formed against you shall prosper. 1 Samuel 1:3"}, {"name": "Jehovah Shammah", "meaning": "The Lord Is There", "definition": "His presence never leaves you not in fear, not in failure, not in silence. Ezekiel 48:35"}, {"name": "Jehovah-’Immeku", "meaning": "Lord Is With You", "definition": "Judges 6:12"}, {"name": "Jehovah-Adon Kal Ha’arets", "meaning": "Lord of Earth", "definition": "Joshua 3:13"}, {"name": "Jehovah-Chatsahi/ Jehovah-’Ez-Lami", "meaning": "Lord My Strength", "definition": "Psalm 27:1, Psalm 28:7"}, {"name": "Jehovah-Chereb", "meaning": "Lord the Sword", "definition": "Deuteronomy 33:29"}, {"name": "Jehovah-Gador Milchamah", "meaning": "Mighty in Battle", "definition": "Psalm 24:8"}, {"name": "Jehovah-Go'el", "meaning": "Lord My Redeemer", "definition": "Isaiah 49:26, 60:16)"}, {"name": "Jehovah-Hoshe'ah", "meaning": "Lord Saves", "definition": "Psalm 20:9"}, {"name": "Jehovah-Kanna", "meaning": "Lord Jealous", "definition": "Exodus 34:14"}, {"name": "Jehovah-Keren-Yish'i", "meaning": "Horn of Salvation", "definition": "Psalm 18:2"}, {"name": "Jehovah-Machsi", "meaning": "Lord My Refuge", "definition": "Psalm 91:9"}, {"name": "Jehovah-Magen", "meaning": "Lord My Shield", "definition": "Deuteronomy 33:29"}, {"name": "Jehovah-Ma'oz", "meaning": "Lord My Fortress", "definition": "Jeremiah 16:19"}, {"name": "Jehovah-Mephalti", "meaning": "Lord My Deliverer", "definition": "Psalm 18:2"}, {"name": "Jehovah-Metshodhathi", "meaning": "Lord My Fortress", "definition": "Psalm 18:2"}, {"name": "Jehovah-Misqabbi", "meaning": "Lord My High Tower", "definition": "Psalm 18:2"}, {"name": "Jehovah-Naheh", "meaning": "Lord Who Smites", "definition": "Ezekiel 7:9"}, {"name": "Jehovah-Sel'i", "meaning": "Lord My Rock", "definition": "Psalm 18:2"}, {"name": "Jehovah-’Uzam", "meaning": "Lord Strength in Trouble", "definition": "Isaiah 49:26"}];

const misconceptions = [{"title": "Terrorist or having terrorist sympathies and violence", "body": "Islam is a religion of peace and mercy and does not condone terrorism in any form. According to the Qur’an and the Sunnah, murder is a major sin in Islam.", "quotes": ["“God does not forbid you from showing kindness and dealing justly with those who have not fought you about religion and have not driven you out of your homes.  God loves just dealers.” (Quran 60:8)", "“Whoever kills a soul unless for a soul or for corruption [done] in the land – it is as if he had slain mankind entirely.” (Quran 5:32)"]}, {"title": "Muslim women are oppressed", "body": "While the Qur’an and Islam emphasize the well-being of women, certain cultural traditions often discriminate against them. The Qur’an admonishes men who oppress or ill-treat women. Islam was actually one of the first religions to ban female infanticide, promote martial equality, grant women financial right, allow for divorce, and promote shared parenting. However, the misalignment often arises from cultural practices, where husbands assume positions of authority, divorce is made challenging, and certain customs distort the original intent of practices such as polygamy and veiling, rendering them instruments of oppression.", "quotes": ["“O you who believe! You are forbidden to inherit women against their will. Nor should you treat them with harshness, that you may take away part of the dowry you have given them – except when they have become guilty of open lewdness. On the contrary, live with them on a footing of kindness and equity. If you take a dislike to them, it may be that you dislike something and Allah will bring about through it a great deal of good.” (Quran 4:19)", "“And for women are rights over men similar to those of men over women” (Surah Al-Baqarah 2:228)"]}, {"title": "Islam was spread by the sword", "body": "Islam was not spread only through military conquest. In regions like Indonesia and sub-Saharan African Islam was spread primarily through trade and peaceful missionary efforts.", "quotes": ["“There shall be no compulsion in [acceptance of] the religion” (Surah Al-Baqarah 2:256)"]}, {"title": "All Muslims are Arabs", "body": "Only about 20% of Muslims worldwide are Arabs. The largest Muslim populations are in Indonesia, Pakistan, India and Bangladesh. Islam is a universal religion, and its followers come from diverse ethnic and cultural backgrounds.", "quotes": []}, {"title": "Islam is intolerant of other religions", "body": "Islam recognizes and respects the Abrahamic faiths. The Qur’an mentions Jews and Christian as “People of the Book.”", "quotes": ["“Indeed, those who believe and those who are Jews or Christians or Sabeans – those [among them] who believe in Allah and the Last Day and do righteousness – will have their reward with their Lord” (I couldn’t find an exact reference verse for this, but Surah Al-Maidah 3:5 states that the food of the People of the Book is lawful for Muslims, and Surah Al-Ankabut 29:46 emphasizes the importance of recognising their scriptures.)"]}, {"title": "Jihad means Holy War", "body": "While it can mean struggle in the path of God, it primarily refers to internal, spiritual struggle.", "quotes": ["“And strive for Allah with the striving due to Him” (Quran 22:78)"]}, {"title": "Muslims don’t respect Jesus", "body": "Isa (Jesus) is a highly respected prophet in Islam. Muslims believe in his miraculous birth and his role as the Messiah.", "quotes": ["“[Jesus] said, Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet” (Quran 19:30)"]}, {"title": "Sharia law is barbaric", "body": "Sharia, meaning “path” in Arabic, is a moral and legal framework that governs many aspects of a Muslim’s life. It includes guidelines for prayer, fasting, charity, and justice. The application of Sharia varies and is often misrepresented in media.", "quotes": []}, {"title": "Islam promotes backwardness and is anti-science", "body": "Many people believe that Islam is opposed to science and modernity. In fact, during the Golden Age of Islam, Muslim scholars made significant contributions to medicine, mathematics, astronomy, and philosophy.", "quotes": ["“Say, Are those who know equal to those who do not know?” (Quran 39:9)"]}];

const quizQuestions = [{"name": "Jehovah Rapha", "answer": "Christian", "hint": "The Lord Who Heals"}, {"name": "Jehovah Raah", "answer": "Christian", "hint": "The Lord My Shepherd"}, {"name": "El-Shaddai", "answer": "Christian", "hint": "God Almighty"}, {"name": "Ar-Rahman", "answer": "Shared", "hint": "The Beneficent; connected with divine mercy"}, {"name": "Al-Malik", "answer": "Shared", "hint": "The King; connected with King of Kings"}, {"name": "As-Salam", "answer": "Shared", "hint": "The Giver of Peace; connected with Jehovah Shalom"}, {"name": "Al-Quddus", "answer": "Islamic", "hint": "The Most Sacred / The Most Holy"}, {"name": "Al-Mumin", "answer": "Islamic", "hint": "The Infuser of Faith"}, {"name": "Al-Musawwir", "answer": "Islamic", "hint": "The Flawless Shaper"}, {"name": "As-Sabur", "answer": "Islamic", "hint": "The Extensively Enduring One"}];

const grid = document.querySelector('#islamicNamesGrid');
const search = document.querySelector('#searchNames');
const filter = document.querySelector('#nameFilter');
const modal = document.querySelector('#theologyModal');
const modalContent = document.querySelector('#modalContent');
const closeModalButton = document.querySelector('#closeTheologyModal');

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderIslamicNames(){
  const term = search.value.toLowerCase();
  const f = filter.value;
  const filtered = islamicNames.filter(item => {
    const haystack = `${item.arabic} ${item.name} ${item.meaning} ${item.definition} ${item.connection}`.toLowerCase();
    const matchesSearch = haystack.includes(term);
    const matchesFilter = f === 'all' || (f === 'shared' ? item.connection : item.tags.includes(f));
    return matchesSearch && matchesFilter;
  });

  grid.innerHTML = filtered.map(item => `
    <article class="name-card ${item.connection ? 'has-connection' : ''}" data-name-number="${item.n}" tabindex="0" role="button" aria-label="Open definition for ${escapeHtml(item.name)}">
      <div class="card-top"><span class="number">${item.n}</span><span class="arabic">${escapeHtml(item.arabic)}</span></div>
      <h3>${escapeHtml(item.name)}</h3>
      <p class="meaning">${escapeHtml(item.meaning)}</p>
      <p>${escapeHtml(item.definition)}</p>
      ${item.connection ? `<p class="connection"><strong>Christian connection:</strong> ${escapeHtml(item.connection)}</p>` : ''}
    </article>
  `).join('') || '<p class="empty">No names match your search.</p>';

  document.querySelectorAll('#islamicNamesGrid .name-card').forEach(card => {
    card.addEventListener('click', () => openIslamicDefinition(card.dataset.nameNumber));
    card.addEventListener('keydown', event => {
      if(event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openIslamicDefinition(card.dataset.nameNumber);
      }
    });
  });
}

function buildIslamicDefinitionPanel(item){
  return `
    <p class="modal-eyebrow">Name ${item.n} of 99</p>
    <div class="modal-heading-row">
      <div>
        <h2 id="modalTitle">${escapeHtml(item.name)}</h2>
        <p class="modal-meaning">${escapeHtml(item.meaning)}</p>
      </div>
      <p class="modal-arabic" lang="ar" dir="rtl">${escapeHtml(item.arabic)}</p>
    </div>
    <div class="deep-grid one-column">
      <section class="deep-section">
        <h3>Definition</h3>
        <p>${escapeHtml(item.definition)}</p>
      </section>
      ${item.connection ? `
      <section class="deep-section">
        <h3>Christian connection from the document</h3>
        <p>${escapeHtml(item.connection)}</p>
      </section>` : ''}
    </div>
  `;
}

function buildChristianDefinitionPanel(item) {
  return `
    <p class="modal-eyebrow">Unique Christian Name for God</p>
    <div class="modal-heading-row">
      <div>
        <h2 id="modalTitle">${escapeHtml(item.name)}</h2>
        <p class="modal-meaning">${escapeHtml(item.meaning)}</p>
      </div>
    </div>
    <div class="deep-grid one-column">
      <section class="deep-section">
        <h3>Definition</h3>
        <p>${escapeHtml(item.definition)}</p>
      </section>
    </div>
  `;
}

function openIslamicDefinition(number){
  const item = islamicNames.find(name => name.n === Number(number));
  if(!item) return;
  modalContent.innerHTML = buildIslamicDefinitionPanel(item);
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  closeModalButton.focus();
}

function openChristianDefinition(name){
  const item = christianNames.find(n => n.name === name);
  if(!item) return;
  modalContent.innerHTML = buildChristianDefinitionPanel(item);
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  closeModalButton.focus();
}

function closeDefinitionPanel(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}

function renderChristianNames(){
  document.querySelector('#christianNamesGrid').innerHTML = christianNames.map(item => `
    <article class="name-card christian-card" data-christian-name="${escapeHtml(item.name)}" tabindex="0" role="button" aria-label="Open definition for ${escapeHtml(item.name)}">
      <h3>${escapeHtml(item.name)}</h3>
      <p class="meaning">${escapeHtml(item.meaning)}</p>
      <p>${escapeHtml(item.definition)}</p>
    </article>
  `).join('');

  document.querySelectorAll('#christianNamesGrid .name-card').forEach(card => {
    card.addEventListener('click', () => openChristianDefinition(card.dataset.christianName));
    card.addEventListener('keydown', event => {
      if(event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openChristianDefinition(card.dataset.christianName);
      }
    });
  });
}

function renderMisconceptions(){
  document.querySelector('#misconceptionsList').innerHTML = misconceptions.map((m,i) => `
    <article class="accordion-item">
      <button class="accordion-trigger" aria-expanded="${i===0 ? 'true':'false'}">
        <span>${escapeHtml(m.title)}</span><span>+</span>
      </button>
      <div class="accordion-panel ${i===0 ? 'open':''}">
        <p>${escapeHtml(m.body)}</p>
        ${m.quotes.map(q => `<p class="quote">${escapeHtml(q)}</p>`).join('')}
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.accordion-trigger').forEach(btn => btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const open = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  }));
}

let current = 0, score = 0, answered = false;
function renderQuiz(){
  const q = quizQuestions[current];
  document.querySelector('#quizProgress').textContent = `Question ${current + 1} of ${quizQuestions.length}`;
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
  const q = quizQuestions[current];
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
  document.querySelector('#quizName').textContent = `Final score: ${score}/${quizQuestions.length}`;
  document.querySelector('#quizHint').textContent = score >= 8 ? 'Excellent work recognizing the names.' : 'Review the name cards below and try again.';
  document.querySelector('#quizOptions').innerHTML = '';
  document.querySelector('#quizFeedback').textContent = '';
  document.querySelector('#nextQuestion').classList.add('hidden');
  document.querySelector('#restartQuiz').classList.remove('hidden');
}

document.querySelector('#nextQuestion').addEventListener('click', () => {
  if(current < quizQuestions.length - 1){ current++; renderQuiz(); } else finishQuiz();
});

document.querySelector('#restartQuiz').addEventListener('click', () => {
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

closeModalButton.addEventListener('click', closeDefinitionPanel);
modal.addEventListener('click', event => { if(event.target === modal) closeDefinitionPanel(); });
document.addEventListener('keydown', event => { if(event.key === 'Escape' && modal.classList.contains('show')) closeDefinitionPanel(); });
search.addEventListener('input', renderIslamicNames);
filter.addEventListener('change', renderIslamicNames);

renderIslamicNames();
renderChristianNames();
renderMisconceptions();
renderQuiz();
