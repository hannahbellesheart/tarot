// ===== TAROT CARD DATABASE =====
// Complete 78-card tarot deck with detailed meanings and metadata

const TAROT_DECK = {
    // ===== MAJOR ARCANA (22 cards) =====
    majorArcana: [
        {
            id: 'the-fool',
            name: 'The Fool',
            number: 0,
            type: 'major',
            element: 'Air',
            keywords: ['New beginnings', 'Innocence', 'Adventure', 'Faith', 'Potential'],
            uprightMeaning: 'The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner\'s luck, improvisation and believing in the universe. This card encourages you to have an open, curious mind and a willingness to learn. The Fool suggests that you are at the very beginning of your journey with unlimited potential.',
            reversedMeaning: 'When reversed, The Fool can indicate recklessness, carelessness, negligence, stupidity, distraction, apathy, irrationality or being taken advantage of. You may be acting in a rash or reckless way, putting yourself or others in danger. Take time to think before you act.',
            imageUrl: 'images/major/00-the-fool.jpg'
        },
        {
            id: 'the-magician',
            name: 'The Magician',
            number: 1,
            type: 'major',
            element: 'Air',
            keywords: ['Manifestation', 'Willpower', 'Desire', 'Creation', 'Skill'],
            uprightMeaning: 'The Magician is a powerful card representing manifestation, willpower, and the ability to turn ideas into reality. You have all the tools you need to achieve your goals. This card suggests that you have the power to influence your own life through the strength of your will and the application of your skills and talents.',
            reversedMeaning: 'Reversed, The Magician can indicate manipulation, poor planning, untapped talents, or using your skills for selfish or harmful purposes. You may be experiencing self-doubt or lacking the confidence to pursue your goals. Be careful not to manipulate others or use your abilities in negative ways.',
            imageUrl: 'images/major/01-the-magician.jpg'
        },
        {
            id: 'the-high-priestess',
            name: 'The High Priestess',
            number: 2,
            type: 'major',
            element: 'Water',
            keywords: ['Intuition', 'Mystery', 'Subconscious', 'Higher power', 'Inner voice'],
            uprightMeaning: 'The High Priestess represents intuition, sacred knowledge, divine feminine, and the subconscious mind. She suggests that you should trust your instincts and look beyond the obvious. This card encourages you to listen to your inner voice and pay attention to your dreams and intuition.',
            reversedMeaning: 'When reversed, The High Priestess can indicate secrets, disconnected from intuition, withdrawal and silence. You may be ignoring your intuition or struggling to connect with your inner wisdom. It can also suggest that information is being withheld from you.',
            imageUrl: 'images/major/02-the-high-priestess.jpg'
        },
        {
            id: 'the-empress',
            name: 'The Empress',
            number: 3,
            type: 'major',
            element: 'Earth',
            keywords: ['Femininity', 'Beauty', 'Nature', 'Nurturing', 'Abundance'],
            uprightMeaning: 'The Empress represents femininity, beauty, nature, nurturing, and abundance. She is a symbol of fertility, creativity, and the nurturing aspects of life. This card suggests a time of growth, creativity, and abundance in your life. You may be entering a period of material or emotional fulfillment.',
            reversedMeaning: 'Reversed, The Empress can indicate creative block, dependence on others, smothering, emptiness, or lack of growth. You may be experiencing creative stagnation or struggling with issues related to self-care and nurturing.',
            imageUrl: 'images/major/03-the-empress.jpg'
        },
        {
            id: 'the-emperor',
            name: 'The Emperor',
            number: 4,
            type: 'major',
            element: 'Fire',
            keywords: ['Authority', 'Structure', 'Control', 'Father figure', 'Leadership'],
            uprightMeaning: 'The Emperor represents authority, structure, control, and fatherhood. He is a symbol of masculine power and leadership. This card suggests that you need to take control of your life and establish order and structure. You may need to be more disciplined and organized in your approach.',
            reversedMeaning: 'When reversed, The Emperor can indicate domination, excessive control, rigidity, ruthlessness, or lack of discipline. You may be experiencing issues with authority figures or struggling with your own need for control.',
            imageUrl: 'images/major/04-the-emperor.jpg'
        },
        {
            id: 'the-hierophant',
            name: 'The Hierophant',
            number: 5,
            type: 'major',
            element: 'Earth',
            keywords: ['Tradition', 'Conformity', 'Morality', 'Ethics', 'Knowledge'],
            uprightMeaning: 'The Hierophant represents tradition, conformity, morality, and ethics. He is a symbol of conventional wisdom and established institutions. This card suggests that you may benefit from following traditional approaches or seeking guidance from established authorities or institutions.',
            reversedMeaning: 'Reversed, The Hierophant can indicate personal beliefs, freedom, challenging the status quo, or unconventional approaches. You may be questioning traditional values or seeking your own spiritual path.',
            imageUrl: 'images/major/05-the-hierophant.jpg'
        },
        {
            id: 'the-lovers',
            name: 'The Lovers',
            number: 6,
            type: 'major',
            element: 'Air',
            keywords: ['Love', 'Harmony', 'Relationships', 'Values alignment', 'Choices'],
            uprightMeaning: 'The Lovers represents love, harmony, relationships, and values alignment. This card suggests a deep connection with another person or a need to make an important choice about relationships or values. It can indicate a romantic relationship or a significant partnership.',
            reversedMeaning: 'When reversed, The Lovers can indicate disharmony, imbalance, misalignment of values, or relationship problems. You may be experiencing conflict in a relationship or struggling to make an important decision.',
            imageUrl: 'images/major/06-the-lovers.jpg'
        },
        {
            id: 'the-chariot',
            name: 'The Chariot',
            number: 7,
            type: 'major',
            element: 'Water',
            keywords: ['Control', 'Willpower', 'Success', 'Determination', 'Direction'],
            uprightMeaning: 'The Chariot represents control, willpower, success, and determination. This card suggests that you have the strength and determination to overcome obstacles and achieve your goals. You are in control of your destiny and moving forward with confidence.',
            reversedMeaning: 'Reversed, The Chariot can indicate lack of control, lack of direction, aggression, or being scattered. You may be struggling to maintain control over your life or lacking the focus needed to achieve your goals.',
            imageUrl: 'images/major/07-the-chariot.jpg'
        },
        {
            id: 'strength',
            name: 'Strength',
            number: 8,
            type: 'major',
            element: 'Fire',
            keywords: ['Inner strength', 'Bravery', 'Compassion', 'Focus', 'Influence'],
            uprightMeaning: 'Strength represents inner strength, bravery, compassion, and focus. This card suggests that you have the inner strength to overcome challenges through patience, compassion, and gentle control rather than force. True strength comes from within.',
            reversedMeaning: 'When reversed, Strength can indicate self-doubt, lack of confidence, low energy, or raw emotion. You may be struggling with self-confidence or allowing your emotions to control you rather than finding your inner strength.',
            imageUrl: 'images/major/08-strength.jpg'
        },
        {
            id: 'the-hermit',
            name: 'The Hermit',
            number: 9,
            type: 'major',
            element: 'Earth',
            keywords: ['Soul searching', 'Seeking guidance', 'Inner wisdom', 'Solitude', 'Reflection'],
            uprightMeaning: 'The Hermit represents soul searching, seeking guidance, and inner wisdom. This card suggests a time of introspection and self-reflection. You may need to withdraw from the world to find the answers you seek within yourself.',
            reversedMeaning: 'Reversed, The Hermit can indicate isolation, loneliness, withdrawal, or being lost. You may be avoiding self-reflection or struggling to find your inner wisdom. It can also suggest that you have been isolated for too long.',
            imageUrl: 'images/major/09-the-hermit.jpg'
        },
        {
            id: 'wheel-of-fortune',
            name: 'Wheel of Fortune',
            number: 10,
            type: 'major',
            element: 'Fire',
            keywords: ['Good luck', 'Karma', 'Life cycles', 'Destiny', 'Turning point'],
            uprightMeaning: 'The Wheel of Fortune represents good luck, karma, life cycles, and destiny. This card suggests that you are at a turning point in your life and that positive changes are coming. What goes around comes around, and you are about to reap the benefits of your past actions.',
            reversedMeaning: 'When reversed, the Wheel of Fortune can indicate bad luck, lack of control, clinging to control, or external forces. You may be experiencing a run of bad luck or feeling like you have no control over your circumstances.',
            imageUrl: 'images/major/10-wheel-of-fortune.jpg'
        },
        {
            id: 'justice',
            name: 'Justice',
            number: 11,
            type: 'major',
            element: 'Air',
            keywords: ['Justice', 'Fairness', 'Truth', 'Cause and effect', 'Law'],
            uprightMeaning: 'Justice represents fairness, truth, cause and effect, and law. This card suggests that you will be treated fairly and that justice will be served. You are being called to account for your actions and to make decisions based on fairness and truth.',
            reversedMeaning: 'Reversed, Justice can indicate unfairness, lack of accountability, dishonesty, or bias. You may be experiencing or witnessing injustice, or you may need to examine your own actions and motivations more honestly.',
            imageUrl: 'images/major/11-justice.jpg'
        },
        {
            id: 'the-hanged-man',
            name: 'The Hanged Man',
            number: 12,
            type: 'major',
            element: 'Water',
            keywords: ['Suspension', 'Restriction', 'Letting go', 'Sacrifice', 'New perspective'],
            uprightMeaning: 'The Hanged Man represents suspension, restriction, letting go, and sacrifice. This card suggests that you may need to let go of something or change your perspective to move forward. Sometimes we need to surrender control to gain a new understanding.',
            reversedMeaning: 'When reversed, The Hanged Man can indicate delays, resistance, stalling, or indecision. You may be resisting necessary changes or refusing to let go of something that is no longer serving you.',
            imageUrl: 'images/major/12-the-hanged-man.jpg'
        },
        {
            id: 'death',
            name: 'Death',
            number: 13,
            type: 'major',
            element: 'Water',
            keywords: ['Endings', 'Beginnings', 'Change', 'Transformation', 'Transition'],
            uprightMeaning: 'Death represents endings, beginnings, change, and transformation. This card rarely represents literal death, but rather the end of one phase of life and the beginning of another. Embrace the transformation that is occurring in your life.',
            reversedMeaning: 'Reversed, Death can indicate resistance to change, personal transformation, inner purging, or fear of change. You may be resisting necessary changes or struggling to let go of the past.',
            imageUrl: 'images/major/13-death.jpg'
        },
        {
            id: 'temperance',
            name: 'Temperance',
            number: 14,
            type: 'major',
            element: 'Fire',
            keywords: ['Balance', 'Moderation', 'Patience', 'Purpose', 'Meaning'],
            uprightMeaning: 'Temperance represents balance, moderation, patience, and purpose. This card suggests that you need to find balance in your life and approach situations with patience and moderation. You are being called to find the middle path.',
            reversedMeaning: 'When reversed, Temperance can indicate imbalance, excess, self-healing, or re-alignment. You may be experiencing extremes in your life or struggling to find balance and moderation.',
            imageUrl: 'images/major/14-temperance.jpg'
        },
        {
            id: 'the-devil',
            name: 'The Devil',
            number: 15,
            type: 'major',
            element: 'Earth',
            keywords: ['Bondage', 'Addiction', 'Sexuality', 'Materialism', 'Temptation'],
            uprightMeaning: 'The Devil represents bondage, addiction, sexuality, and materialism. This card suggests that you may be trapped by your own limiting beliefs or unhealthy patterns. You have the power to break free from whatever is holding you back.',
            reversedMeaning: 'Reversed, The Devil can indicate releasing limiting beliefs, exploring dark thoughts, detachment, or breaking free. You may be in the process of breaking free from unhealthy patterns or limiting beliefs.',
            imageUrl: 'images/major/15-the-devil.jpg'
        },
        {
            id: 'the-tower',
            name: 'The Tower',
            number: 16,
            type: 'major',
            element: 'Fire',
            keywords: ['Sudden change', 'Upheaval', 'Chaos', 'Revelation', 'Awakening'],
            uprightMeaning: 'The Tower represents sudden change, upheaval, chaos, and revelation. This card suggests that a major change or disruption is coming that will shake the foundations of your life. While this may be challenging, it will ultimately lead to positive transformation.',
            reversedMeaning: 'When reversed, The Tower can indicate personal transformation, fear of change, averting disaster, or delayed disaster. You may be avoiding necessary changes or experiencing internal upheaval.',
            imageUrl: 'images/major/16-the-tower.jpg'
        },
        {
            id: 'the-star',
            name: 'The Star',
            number: 17,
            type: 'major',
            element: 'Air',
            keywords: ['Hope', 'Faith', 'Purpose', 'Renewal', 'Spirituality'],
            uprightMeaning: 'The Star represents hope, faith, purpose, and renewal. This card suggests that you are entering a period of calm and peace after a difficult time. You have renewed faith in yourself and the future, and you are aligned with your higher purpose.',
            reversedMeaning: 'Reversed, The Star can indicate lack of faith, despair, self-trust, or disconnection. You may be feeling hopeless or struggling to connect with your spiritual side or higher purpose.',
            imageUrl: 'images/major/17-the-star.jpg'
        },
        {
            id: 'the-moon',
            name: 'The Moon',
            number: 18,
            type: 'major',
            element: 'Water',
            keywords: ['Illusion', 'Fear', 'Anxiety', 'Subconscious', 'Intuition'],
            uprightMeaning: 'The Moon represents illusion, fear, anxiety, and the subconscious. This card suggests that things are not as they seem and that you may be dealing with confusion or deception. Trust your intuition to guide you through uncertain times.',
            reversedMeaning: 'When reversed, The Moon can indicate releasing fear, repressed emotion, inner confusion, or self-deception. You may be overcoming fears or gaining clarity about a confusing situation.',
            imageUrl: 'images/major/18-the-moon.jpg'
        },
        {
            id: 'the-sun',
            name: 'The Sun',
            number: 19,
            type: 'major',
            element: 'Fire',
            keywords: ['Positivity', 'Fun', 'Warmth', 'Success', 'Vitality'],
            uprightMeaning: 'The Sun represents positivity, fun, warmth, success, and vitality. This card suggests that you are entering a period of joy, success, and abundance. Everything is going well, and you should embrace the positive energy surrounding you.',
            reversedMeaning: 'Reversed, The Sun can indicate inner child, feeling down, overly optimistic, or unrealistic expectations. You may be struggling to see the positive side of things or being overly optimistic about a situation.',
            imageUrl: 'images/major/19-the-sun.jpg'
        },
        {
            id: 'judgement',
            name: 'Judgement',
            number: 20,
            type: 'major',
            element: 'Fire',
            keywords: ['Judgement', 'Rebirth', 'Inner calling', 'Forgiveness', 'Evaluation'],
            uprightMeaning: 'Judgement represents rebirth, inner calling, and forgiveness. This card suggests that you are being called to a higher purpose and that it is time to make important decisions about your life. You are being given a second chance to make things right.',
            reversedMeaning: 'When reversed, Judgement can indicate self-doubt, harsh judgement, lack of self-awareness, or avoiding a calling. You may be being too hard on yourself or others, or avoiding an important decision or calling.',
            imageUrl: 'images/major/20-judgement.jpg'
        },
        {
            id: 'the-world',
            name: 'The World',
            number: 21,
            type: 'major',
            element: 'Earth',
            keywords: ['Completion', 'Accomplishment', 'Travel', 'Success', 'Fulfillment'],
            uprightMeaning: 'The World represents completion, accomplishment, and fulfillment. This card suggests that you have achieved your goals and reached a state of completion and satisfaction. You have successfully completed a major life cycle and are ready for the next phase.',
            reversedMeaning: 'Reversed, The World can indicate personal closure, stagnation, lack of progress, or incomplete goals. You may be struggling to complete a project or achieve your goals, or you may be feeling stuck in your current situation.',
            imageUrl: 'images/major/21-the-world.jpg'
        }
    ],

    // ===== MINOR ARCANA - CUPS (14 cards) =====
    cups: [
        {
            id: 'ace-of-cups',
            name: 'Ace of Cups',
            number: 1,
            type: 'cups',
            element: 'Water',
            keywords: ['Love', 'New relationships', 'Compassion', 'Creativity', 'Emotional beginnings'],
            uprightMeaning: 'The Ace of Cups represents new love, emotional beginnings, compassion, and creativity. This card suggests the beginning of a new emotional journey, whether in love, friendship, or creative endeavors. Your heart is open to new experiences and connections.',
            reversedMeaning: 'Reversed, the Ace of Cups can indicate emotional loss, blocked creativity, emptiness, or repressed emotions. You may be struggling to connect with your emotions or experiencing disappointment in love or relationships.',
            imageUrl: 'images/cups/ace-of-cups.jpg'
        },
        {
            id: 'two-of-cups',
            name: 'Two of Cups',
            number: 2,
            type: 'cups',
            element: 'Water',
            keywords: ['Unified love', 'Partnership', 'Mutual attraction', 'Relationships', 'Connection'],
            uprightMeaning: 'The Two of Cups represents unified love, partnership, and mutual attraction. This card suggests a strong connection with another person, whether romantic, platonic, or professional. You are in harmony with someone important in your life.',
            reversedMeaning: 'When reversed, the Two of Cups can indicate disharmony, imbalance, broken communication, or tension in relationships. You may be experiencing conflict or disconnection with someone close to you.',
            imageUrl: 'images/cups/two-of-cups.jpg'
        },
        {
            id: 'three-of-cups',
            name: 'Three of Cups',
            number: 3,
            type: 'cups',
            element: 'Water',
            keywords: ['Celebration', 'Friendship', 'Creativity', 'Community', 'Social gatherings'],
            uprightMeaning: 'The Three of Cups represents celebration, friendship, and community. This card suggests a time of joy, celebration, and social connection. You are surrounded by supportive friends and enjoying life\'s pleasures.',
            reversedMeaning: 'Reversed, the Three of Cups can indicate gossip, isolation, overindulgence, or superficial friendships. You may be experiencing social difficulties or feeling disconnected from your community.',
            imageUrl: 'images/cups/three-of-cups.jpg'
        },
        {
            id: 'four-of-cups',
            name: 'Four of Cups',
            number: 4,
            type: 'cups',
            element: 'Water',
            keywords: ['Meditation', 'Contemplation', 'Apathy', 'Reevaluation', 'Boredom'],
            uprightMeaning: 'The Four of Cups represents meditation, contemplation, and reevaluation. This card suggests that you may be feeling apathetic or bored with your current situation. It is time to look within and reassess what truly matters to you.',
            reversedMeaning: 'When reversed, the Four of Cups can indicate retreat, withdrawal, or missed opportunities. You may be withdrawing from the world or failing to see the opportunities that are available to you.',
            imageUrl: 'images/cups/four-of-cups.jpg'
        },
        {
            id: 'five-of-cups',
            name: 'Five of Cups',
            number: 5,
            type: 'cups',
            element: 'Water',
            keywords: ['Regret', 'Failure', 'Disappointment', 'Pessimism', 'Loss'],
            uprightMeaning: 'The Five of Cups represents regret, failure, and disappointment. This card suggests that you are focusing on what has gone wrong rather than what is still possible. While loss is painful, there are still opportunities for happiness and fulfillment.',
            reversedMeaning: 'Reversed, the Five of Cups can indicate personal setbacks, self-forgiveness, moving on, or recovery. You may be beginning to heal from past disappointments and ready to move forward.',
            imageUrl: 'images/cups/five-of-cups.jpg'
        },
        {
            id: 'six-of-cups',
            name: 'Six of Cups',
            number: 6,
            type: 'cups',
            element: 'Water',
            keywords: ['Revisiting the past', 'Childhood memories', 'Innocence', 'Joy', 'Nostalgia'],
            uprightMeaning: 'The Six of Cups represents revisiting the past, childhood memories, and innocence. This card suggests a connection to your past or childhood that brings joy and comfort. You may be reconnecting with old friends or revisiting happy memories.',
            reversedMeaning: 'When reversed, the Six of Cups can indicate living in the past, naivety, or unrealistic expectations. You may be stuck in the past or approaching situations with unrealistic expectations based on past experiences.',
            imageUrl: 'images/cups/six-of-cups.jpg'
        },
        {
            id: 'seven-of-cups',
            name: 'Seven of Cups',
            number: 7,
            type: 'cups',
            element: 'Water',
            keywords: ['Opportunities', 'Choices', 'Wishful thinking', 'Illusion', 'Fantasy'],
            uprightMeaning: 'The Seven of Cups represents opportunities, choices, and wishful thinking. This card suggests that you have many options available to you, but you may be overwhelmed by the choices or caught up in unrealistic fantasies.',
            reversedMeaning: 'Reversed, the Seven of Cups can indicate determination, will, making choices, or lack of options. You may be gaining clarity about your options or feeling limited in your choices.',
            imageUrl: 'images/cups/seven-of-cups.jpg'
        },
        {
            id: 'eight-of-cups',
            name: 'Eight of Cups',
            number: 8,
            type: 'cups',
            element: 'Water',
            keywords: ['Disappointment', 'Abandonment', 'Withdrawal', 'Escapism', 'Seeking truth'],
            uprightMeaning: 'The Eight of Cups represents disappointment, abandonment, and withdrawal. This card suggests that you are walking away from a situation that no longer serves you, even though it may be difficult. You are seeking deeper meaning and truth.',
            reversedMeaning: 'When reversed, the Eight of Cups can indicate trying one more time, indecision, or fear of change. You may be hesitant to leave a situation that is not working or struggling to make a necessary change.',
            imageUrl: 'images/cups/eight-of-cups.jpg'
        },
        {
            id: 'nine-of-cups',
            name: 'Nine of Cups',
            number: 9,
            type: 'cups',
            element: 'Water',
            keywords: ['Contentment', 'Satisfaction', 'Gratitude', 'Wish fulfillment', 'Happiness'],
            uprightMeaning: 'The Nine of Cups represents contentment, satisfaction, and wish fulfillment. This card suggests that you are experiencing emotional and material satisfaction. Your wishes are coming true, and you should take time to appreciate what you have achieved.',
            reversedMeaning: 'Reversed, the Nine of Cups can indicate inner happiness, materialism, dissatisfaction, or indulgence. You may be seeking happiness in material things or struggling to find true contentment.',
            imageUrl: 'images/cups/nine-of-cups.jpg'
        },
        {
            id: 'ten-of-cups',
            name: 'Ten of Cups',
            number: 10,
            type: 'cups',
            element: 'Water',
            keywords: ['Happiness', 'Fulfillment', 'Emotional stability', 'Family', 'Harmony'],
            uprightMeaning: 'The Ten of Cups represents happiness, fulfillment, and emotional stability. This card suggests that you have achieved emotional fulfillment and harmony in your relationships and family life. You are experiencing true happiness and contentment.',
            reversedMeaning: 'When reversed, the Ten of Cups can indicate shattered dreams, broken family, domestic disharmony, or disconnection. You may be experiencing problems in your family or personal relationships.',
            imageUrl: 'images/cups/ten-of-cups.jpg'
        },
        {
            id: 'page-of-cups',
            name: 'Page of Cups',
            number: 11,
            type: 'cups',
            element: 'Water',
            keywords: ['Creative opportunities', 'Intuitive messages', 'Curiosity', 'Possibility', 'New ideas'],
            uprightMeaning: 'The Page of Cups represents creative opportunities, intuitive messages, and curiosity. This card suggests that new creative or emotional opportunities are coming your way. Stay open to intuitive messages and new possibilities.',
            reversedMeaning: 'Reversed, the Page of Cups can indicate emotional immaturity, lack of creativity, or blocked intuition. You may be struggling to connect with your creative or intuitive side.',
            imageUrl: 'images/cups/page-of-cups.jpg'
        },
        {
            id: 'knight-of-cups',
            name: 'Knight of Cups',
            number: 12,
            type: 'cups',
            element: 'Water',
            keywords: ['Romance', 'Charm', 'Knight in shining armor', 'Idealism', 'Following the heart'],
            uprightMeaning: 'The Knight of Cups represents romance, charm, and following your heart. This card suggests that you or someone in your life is acting from the heart, pursuing romantic ideals, or offering emotional support and love.',
            reversedMeaning: 'When reversed, the Knight of Cups can indicate moodiness, disappointment, or unrealistic expectations. You may be experiencing emotional ups and downs or being overly idealistic about love or relationships.',
            imageUrl: 'images/cups/knight-of-cups.jpg'
        },
        {
            id: 'queen-of-cups',
            name: 'Queen of Cups',
            number: 13,
            type: 'cups',
            element: 'Water',
            keywords: ['Compassionate', 'Caring', 'Emotionally stable', 'Intuitive', 'Healer'],
            uprightMeaning: 'The Queen of Cups represents compassion, caring, and emotional stability. This card suggests that you are in touch with your emotions and able to offer support and healing to others. You are emotionally mature and intuitive.',
            reversedMeaning: 'Reversed, the Queen of Cups can indicate emotional insecurity, depending on others, or being overly sensitive. You may be struggling with emotional boundaries or feeling overwhelmed by others\' emotions.',
            imageUrl: 'images/cups/queen-of-cups.jpg'
        },
        {
            id: 'king-of-cups',
            name: 'King of Cups',
            number: 14,
            type: 'cups',
            element: 'Water',
            keywords: ['Emotional balance', 'Compassion', 'Diplomacy', 'Calmness', 'Devotion'],
            uprightMeaning: 'The King of Cups represents emotional balance, compassion, and diplomacy. This card suggests that you have mastered your emotions and can remain calm and composed even in difficult situations. You are a natural counselor and healer.',
            reversedMeaning: 'When reversed, the King of Cups can indicate emotional manipulation, moodiness, or volatility. You may be struggling to control your emotions or using your emotional intelligence in manipulative ways.',
            imageUrl: 'images/cups/king-of-cups.jpg'
        }
    ],

    // ===== MINOR ARCANA - WANDS (14 cards) =====
    wands: [
        {
            id: 'ace-of-wands',
            name: 'Ace of Wands',
            number: 1,
            type: 'wands',
            element: 'Fire',
            keywords: ['Inspiration', 'New opportunities', 'Growth', 'Potential', 'Creative spark'],
            uprightMeaning: 'The Ace of Wands represents inspiration, new opportunities, and creative potential. This card suggests that you are at the beginning of a new creative or professional venture. You have the energy and inspiration needed to succeed.',
            reversedMeaning: 'Reversed, the Ace of Wands can indicate lack of energy, delays, or false starts. You may be experiencing creative blocks or struggling to get a new project off the ground.',
            imageUrl: 'images/wands/ace-of-wands.jpg'
        },
        {
            id: 'two-of-wands',
            name: 'Two of Wands',
            number: 2,
            type: 'wands',
            element: 'Fire',
            keywords: ['Future planning', 'Making decisions', 'Leaving comfort zone', 'Personal power', 'Expansion'],
            uprightMeaning: 'The Two of Wands represents future planning, making decisions, and personal power. This card suggests that you are planning for the future and considering your options. You have the power to shape your destiny.',
            reversedMeaning: 'When reversed, the Two of Wands can indicate personal goals, inner alignment, fear of unknown, or lack of planning. You may be struggling to make decisions about your future or feeling uncertain about your path forward.',
            imageUrl: 'images/wands/two-of-wands.jpg'
        }
    ],

    // ===== MINOR ARCANA - SWORDS (14 cards) =====
    swords: [
        {
            id: 'ace-of-swords',
            name: 'Ace of Swords',
            number: 1,
            type: 'swords',
            element: 'Air',
            keywords: ['Breakthrough', 'New ideas', 'Mental clarity', 'Communication', 'Truth'],
            uprightMeaning: 'The Ace of Swords represents breakthrough, new ideas, and mental clarity. This card suggests a moment of clarity or a new understanding that cuts through confusion. You have the mental power to overcome challenges.',
            reversedMeaning: 'Reversed, the Ace of Swords can indicate confusion, lack of clarity, or miscommunication. You may be struggling with mental fog or having difficulty expressing your ideas clearly.',
            imageUrl: 'images/swords/ace-of-swords.jpg'
        }
    ],

    // ===== MINOR ARCANA - PENTACLES (14 cards) =====
    pentacles: [
        {
            id: 'ace-of-pentacles',
            name: 'Ace of Pentacles',
            number: 1,
            type: 'pentacles',
            element: 'Earth',
            keywords: ['New financial opportunity', 'Manifestation', 'Abundance', 'Material gain', 'Prosperity'],
            uprightMeaning: 'The Ace of Pentacles represents new financial opportunities, manifestation, and abundance. This card suggests the beginning of a prosperous venture or the manifestation of material goals. Success is within reach.',
            reversedMeaning: 'Reversed, the Ace of Pentacles can indicate missed opportunities, lack of planning, or poor financial decisions. You may be struggling with money matters or failing to see profitable opportunities.',
            imageUrl: 'images/pentacles/ace-of-pentacles.jpg'
        }
    ]
};

// ===== TAROT SPREADS CONFIGURATION =====
const TAROT_SPREADS = {
    'single': {
        name: 'Single Card',
        description: 'Perfect for daily guidance or quick insights',
        positions: [
            { id: 1, name: 'Your Card', description: 'The message for you today' }
        ]
    },
    'three-card': {
        name: 'Three Card Spread',
        description: 'Past, Present, Future or Situation, Action, Outcome',
        positions: [
            { id: 1, name: 'Past/Situation', description: 'What has led to this moment' },
            { id: 2, name: 'Present/Action', description: 'What you need to focus on now' },
            { id: 3, name: 'Future/Outcome', description: 'The likely outcome or future direction' }
        ]
    },
    'celtic-cross': {
        name: 'Celtic Cross',
        description: 'Comprehensive 10-card spread for deep insights',
        positions: [
            { id: 1, name: 'Present Situation', description: 'Your current circumstances' },
            { id: 2, name: 'Challenge', description: 'What crosses or challenges you' },
            { id: 3, name: 'Distant Past', description: 'Foundation of the situation' },
            { id: 4, name: 'Recent Past', description: 'Recent events affecting you' },
            { id: 5, name: 'Possible Outcome', description: 'What may happen' },
            { id: 6, name: 'Near Future', description: 'What will happen soon' },
            { id: 7, name: 'Your Approach', description: 'How you approach the situation' },
            { id: 8, name: 'External Influences', description: 'How others see you' },
            { id: 9, name: 'Hopes and Fears', description: 'Your inner feelings' },
            { id: 10, name: 'Final Outcome', description: 'The ultimate result' }
        ]
    },
    'relationship': {
        name: 'Relationship Spread',
        description: 'Explore connections and relationships',
        positions: [
            { id: 1, name: 'You', description: 'Your role in the relationship' },
            { id: 2, name: 'Them', description: 'Their role in the relationship' },
            { id: 3, name: 'Connection', description: 'The bond between you' },
            { id: 4, name: 'Challenge', description: 'What challenges the relationship' },
            { id: 5, name: 'Outcome', description: 'Where the relationship is heading' }
        ]
    }
};

// ===== LEARNING MODULES DATA =====
const LEARNING_MODULES = {
    basics: {
        title: 'Tarot Basics',
        content: `
            <h3>Welcome to Tarot</h3>
            <p>Tarot is an ancient divination system that uses 78 cards to provide insight and guidance. Each card has its own meaning and symbolism.</p>
            
            <h4>The Structure of Tarot</h4>
            <ul>
                <li><strong>Major Arcana (22 cards):</strong> Represent major life themes and spiritual lessons</li>
                <li><strong>Minor Arcana (56 cards):</strong> Represent everyday situations and experiences</li>
            </ul>
            
            <h4>The Four Suits</h4>
            <ul>
                <li><strong>Cups (Water):</strong> Emotions, relationships, spirituality</li>
                <li><strong>Wands (Fire):</strong> Creativity, passion, career, growth</li>
                <li><strong>Swords (Air):</strong> Thoughts, communication, conflict, intellect</li>
                <li><strong>Pentacles (Earth):</strong> Material matters, money, health, practical concerns</li>
            </ul>
        `
    },
    major: {
        title: 'Major Arcana',
        content: `
            <h3>The Major Arcana</h3>
            <p>The 22 cards of the Major Arcana represent the major themes and spiritual lessons in life. They tell the story of the Fool's journey from innocence to enlightenment.</p>
            
            <h4>The Fool's Journey</h4>
            <p>The Major Arcana cards can be seen as stages in a spiritual journey:</p>
            <ul>
                <li><strong>0-7:</strong> The material world and earthly lessons</li>
                <li><strong>8-14:</strong> The emotional and spiritual awakening</li>
                <li><strong>15-21:</strong> The spiritual tests and enlightenment</li>
            </ul>
        `
    },
    minor: {
        title: 'Minor Arcana',
        content: `
            <h3>The Minor Arcana</h3>
            <p>The 56 cards of the Minor Arcana deal with everyday situations and practical matters. Each suit has 14 cards: Ace through 10, plus four court cards.</p>
            
            <h4>Court Cards</h4>
            <ul>
                <li><strong>Page:</strong> New beginnings, messages, learning</li>
                <li><strong>Knight:</strong> Action, movement, extremes</li>
                <li><strong>Queen:</strong> Mastery, nurturing, inner wisdom</li>
                <li><strong>King:</strong> Authority, control, outer mastery</li>
            </ul>
        `
    },
    techniques: {
        title: 'Reading Techniques',
        content: `
            <h3>How to Read Tarot Cards</h3>
            <p>Reading tarot is both an art and a skill that develops with practice. Here are some key techniques:</p>
            
            <h4>Before You Begin</h4>
            <ul>
                <li>Clear your mind and set an intention</li>
                <li>Shuffle the cards while focusing on your question</li>
                <li>Choose cards that feel right to you</li>
            </ul>
            
            <h4>Interpreting Cards</h4>
            <ul>
                <li>Look at the imagery and symbolism</li>
                <li>Consider the card's traditional meaning</li>
                <li>Think about how it relates to your question</li>
                <li>Trust your intuition</li>
            </ul>
        `
    }
};

// ===== UTILITY FUNCTIONS =====
function getAllCards() {
    return [
        ...TAROT_DECK.majorArcana,
        ...TAROT_DECK.cups,
        ...TAROT_DECK.wands,
        ...TAROT_DECK.swords,
        ...TAROT_DECK.pentacles
    ];
}

function getCardById(id) {
    const allCards = getAllCards();
    return allCards.find(card => card.id === id);
}

function shuffleDeck(deck = null) {
    const cards = deck || getAllCards();
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function drawCards(count, deck = null) {
    const shuffled = shuffleDeck(deck);
    return shuffled.slice(0, count);
}