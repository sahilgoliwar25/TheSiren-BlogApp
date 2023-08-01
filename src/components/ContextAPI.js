import React, { createContext, useState } from "react";

export const Store = createContext();
function ContextAPI(props) {
  const [data, setData] = useState([
    {
      id: 1,
      heading:
        "What Varun Dhawan Said About Backlash Over Bawaal Dialogues On Hitler And Holocaust",
      image:
        "https://c.ndtvimg.com/2023-07/iijenbuo_-varun-dhawan-_625x300_26_July_23.jpg",
      description:
        "New Delhi: Varun Dhawan has served up a hot take on his own film Bawaal and Hollywood release Oppenheimer, both of which have been criticized for controversial scenes. Bawaal, directed by Nitesh Tiwari, features the Holocaust as a plot point, comparing a troubled marriage to Hitler's regime and concentration camps like Auschwitz. The film features lines like this one spoken by Janhvi Kapoor's character: Hum sab bhi toh thode bohot Hitler jaise hi hai na (we all are a little bit like Hitler). Speaking to Pinkvilla, Varun pointed out that his character is meant to be grey. What I dont understand like how Sir (Nitesh Tiwari) said that its a context and the protagonist is from Lucknow and its showing that the character which is Ajju Bhaiya is initially a tone-deaf character.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Bollywood",
    },
    {
      id: 2,
      heading:
        "Adding These 8 Habits To Your Routine Could Add Decades To Your Life",
      image:
        "https://c.ndtvimg.com/2022-12/7oc6jflg_running_650x400_28_December_22.jpg?q=50",
      description:
        "Your life expectancy may be increased by eating a healthy diet and exercising frequently. Your chance of developing some diseases may be decreased by other variables, such as overeating and drinking alcohol in excess of what is considered reasonable. Many people believe that heredity has a significant role in determining life expectancy. But the influence of genes is significantly less important than previously thought. Environmental aspects including diet and lifestyle turn out to be important. Your chromosomal ends shorten as you become older. You are more prone to fall ill as a result. However, lifestyle modification can increase an enzyme that lengthens them. Additionally, research suggests diet and exercise can aid in protecting them. Keep reading as we discuss what lifestyle habits can help boost your life expectancy.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Fitness",
    },
    {
      id: 3,
      heading:
        "The Masala Life: 7 Traditional Spice Mixes From Different Regions Of India",
      image:
        "https://c.ndtvimg.com/2023-07/757utqg8_indian-masalas-or-spice-mixes_625x300_26_July_23.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      description:
        "Masalas or spice mixes are the essence of Indian cuisine, infusing dishes with irresistible aromas, vibrant colours, and mouth-watering flavours. These blends also serve as a culinary map, reflecting the diversity of flavours across the country. Embark on a masaledar journey as we explore some of these regional spice mixes and what they are used for. Here are 7 classic Indian masalas that you should have in your kitchen to add a touch of spice to your food (and life!).",
      type: "Travel",
      date: "August 21 2022",
      cat: "Food",
    },
    {
      id: 4,
      heading:
        "Oppo Find N3 Launch Imminent as Company Officially Teases Foldable Phone",
      image:
        "https://i.gadgets360cdn.com/large/oppo_find_n2_oppo_1690455193833.jpg?downsize=950:*",
      description:
        "Oppo Find N3 is expected to launch soon in select global markets. The phone is expected to succeed the Oppo Find N2, which was released in December 2022 with a 7.6-inch primary WUSXGA (1,792 x 1,920 pixels) AMOLED main display and a 5.54-inch full-HD+ (1,080x2,120 pixels) AMOLED cover screen. The phone is equipped with an octa-core Snapdragon 8+ Gen 1 SoC and a 4,520mAh battery with 67W wired SuperVOOC 2.0 fast charging support. The upcoming Find N3 has now officially been teased by the company. Oppo hinted at the imminent launch of the Oppo Find N3 as it teased the phone in a tweet. The post showed the alphabet Z turning around to read as an 'N.' The book-style foldable is most likely to launch in August. Notably, Samsung launched the Galaxy Z Fold 5 and the Galaxy Z Flip 5 on July 26 during the Galaxy Unpacked event held in Seoul. OnePlus Open, the first foldable smartphone from OnePlus, has also recently been tipped to launch on August 29.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Technology",
    },
    {
      id: 5,
      heading: "Sinead O'Connor Forever: Looking Back At Her Musical Legacy",
      image:
        "https://c.ndtvimg.com/2023-07/ii3lfib_sinead-oconnor_625x300_27_July_23.jpg",
      description:
        "Sinead O'Connor was widely known for her provocations but it was her emotive, poignant vocals that propelled her to global acclaim. With a delivery both fierce and breathy, O'Connor sold millions of records following the 1990 album I Do Not Want What I Haven't Got, which saw her star skyrocket after she had gained a cult following from her debut The Lion and the Cobra. Here is a sampling of her top hits: Nothing Compares 2 U O'Connor's best-known hit by far was Nothing Compares 2 U, a track Prince wrote and the Irish singer turned into a power ballad evoking the painful emptiness experienced by a jilted lover. The melancholy 1990 smash soared to the top of the charts worldwide, reigning over the US top songs list for four weeks. It was also royalty on MTV, where O'Connor's stark music video received heavy rotation. Frames of her tightly shot facial features and tears became one of the emblematic images of 1990s music. The critically acclaimed track is a regular on best all-time songs lists.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Hollywood",
    },
    {
      id: 6,
      heading:
        "Anil Kapoor Spotted This Man Listening To My Name Is Lakhan In Munich",
      image:
        "https://c.ndtvimg.com/2023-07/pdno23k_pic-_625x300_28_July_23.jpg",
      description:
        "New Delhi: Anil Kapoor's latest Instagram post screams nostalgia. The actor has shared a video of a man in Munich, Germany, listening to his all-time hit song My Name Is Lakhan from the 1989 film Ram Lakhan. The clip opens to the man sitting on the pavement and vibing to the iconic song. A few seconds later, we can hear Anil Kapoor asking him, “Where did you get this song from? Do you like this song? Where are you from?” The man, pointing at the portable speaker, says, “Anil Kapoor”. He adds, “I am from Transylvania [Romania]. I love India.” The man, however,  couldn't recognise Anil Kapoor. Sharing the heartwarming video on Twitter, Anil Kapoor wrote, “Ek raah se guzarte hue mera guzara hua kal mil gaya...This iconic song still resonates in different parts of the world. In Munich with a gentleman from Transylvania.”",
      type: "Travel",
      date: "August 21 2022",
      cat: "Bollywood",
    },
    {
      id: 7,
      heading:
        "Janhvi Kapoor Walks The Ramp. Maheep, Shanaya And Khushi Compliment Her Look",
      image:
        "https://c.ndtvimg.com/2023-07/898pb7eg_janhvi-_625x300_28_July_23.jpg",
      description:
        "New Delhi: Janhvi Kapoor turned muse for designer Gaurav Gupta and walked the ramp at India Couture Week 2023 on Thursday. The Bawaal actor shared glimpses from the evening on her Instagram. The actor wore a stunning blue lehenga with a cape. She shared pictures from the ramp and off it. The last slide shows Janhvi smitten by the ongoing Barbie fever, courtesy Greta Gerwig directorial Barbie which opened to mostly positive reviews so far. The slide shows Janhvi Kapoor imitating the iconic dialogue 'Hi, Barbie' with one of her team mates. Janhvi posted a blue heart emoji in the caption section of her post. Listen to the latest songs, only on JioSaavn.com Janhvi's look received big shout outs from her family. Jahnvi Kapoor's aunt Maheep Kapoor posted a bunch of blue emojis on it. Janhvi's cousin Shanaya Kapoor wrote, 'Wow' and dropped an emoji. Janhvi's younger sister Khushi Kapoor posted a bunch of clapping emojis. Fans also loved Janhvi Kapoor's look. One user commnented, 'Absolutely gorgeous.' Another one commented, 'Queen of Hearts.' Take a look at Janhvi's post here:",
      type: "Travel",
      date: "August 21 2022",
      cat: "Bollywood",
    },
    {
      id: 8,
      heading:
        "Hollywood A-Listers Lead SAG-AFTRA Strike Rally At Times Square",
      image:
        "https://c.ndtvimg.com/2023-07/8bn30h3_brendon-_625x300_26_July_23.jpg",
      description:
        "New York: Hollywood A-listers including Emmy winner Bryan Cranston and a group of Oscar winners on Tuesday led a large rally of striking actors and writers in New York's Times Square, as the stalemate with studios and streamers dragged on. Academy Award winners Brendan Fraser, Jessica Chastain and F. Murray Abraham were among the stars joining the mass of demonstrators. Movie and television production has effectively shut down in the United States since thousands of members of the Screen Actors Guild (SAG-AFTRA) guild walked off the job on July 14, joining writers who have been on strike for weeks. Both guilds are demanding better pay and job security, as well as safeguards against the threat posed by artificial intelligence as they pursue the first industry-wide walkout in 63 years.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Hollywood",
    },
    {
      id: 9,
      heading:
        "Kia Seltos (2023) First Impressions: Tech Makes This Car Safer, Smarter, More Fun",
      image:
        "https://i.gadgets360cdn.com/large/kia_seltos_2023_first_impressions_front_1690200264234.jpg?downsize=950:*",
      description:
        "The Kia Seltos has been among the most popular cars in its category in India, since its launch in 2019. The mid-sized urban SUV is just as well suited to city driving as on the highway, but what has truly worked for the car in India is its feature-heavy approach to the market. Various features such as Kia Connect (previously known as UVO) and autonomous safety tricks built into the car have helped set the Kia Seltos apart from the strong competition in the segment. Kia has now unveiled the 2023 facelift for the Kia Seltos, which comes with further improvements to the already rich feature set of the car, along with a new premium 'X-line' trim, and improved engine and transmission options across variants. I had a chance to drive the new Kia Seltos and check out the features during a drive from Nagpur to the Pench Tiger Reserve in Madhya Pradesh, and here are some of the key highlights of Kia's new mid-sized Seltos.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Technology",
    },
    {
      id: 10,
      heading: "Asus ROG Ally Review: The Start of Something New?",
      image:
        "https://i.gadgets360cdn.com/large/asus_rog_ally_hand_ndtv_1690357035962.jpg?downsize=950:*",
      description:
        "India isn't seen as a huge market for handheld gaming consoles. Nintendo doesn't have an official presence here at all, Sony never really promoted the PS Vita, and there's no hope of the Steam Deck coming in anytime soon. There clearly is some demand, evidenced by the easy availability of grey-market Nintendo Switch units, online listings for niche Chinese manufacturers such as Ayaneo, and even small yet vocal crowds of retro console enthusiasts in forums online. However, they're a microscopic niche compared to smartphone gamers here, with PUBG/BGMI becoming a cultural phenomenon and even casual titles making enormous money. Over 500 million Indians are estimated to play games on their smartphones; double what the figure was just five years ago. That's incredible in terms of sheer market potential. But what games are these people playing, how much are they willing to spend, and how does the hardware and software fit into their lives? Is there space for a dedicated portable gaming device in the Indian market? And can the new Asus ROG Ally, which costs more than some entry-level gaming laptops, fill it? After spending some time with the device, and some conversations with Asus, here's what I think.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Technology",
    },
    {
      id: 11,
      heading:
        "World Hepatitis Day 2023: Understanding Different Types, Causes And Diagnosis",
      image:
        "https://c.ndtvimg.com/2020-07/mfrt64j8_world-hepatitis-day_625x300_28_July_20.jpg?q=50",
      description:
        "Hepatitis refers to the inflammation of the liver caused by hepatitis viruses A, B, C, D, and E. Despite sharing the same outcome of liver disease, these strains differ significantly in their modes of transmission, disease severity, geographical prevalence, and preventive measures. Globally, an estimated 354 million individuals are affected by hepatitis B or C, with many lacking accesses to testing and treatment. Hepatitis poses a significant social and economic burden on India, with over 40 million people infected with hepatitis B and 6 to 12 million people chronically infected with hepatitis C. To diagnosis hepatitis, a doctor will assess the patient's symptoms, study their medical history and conduct a physical examination of the liver to test for swelling. Blood tests are taken to check enzymes levels in the liver, as well as to determine the type of hepatitis. A liver ultrasound and biopsy might be conducted to check for inflammation and liver damage.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Fitness",
    },
    {
      id: 12,
      heading:
        "How Table Salt Differs From Black Salt? From Taste To Uses And Benefits",
      image:
        "How Table Salt Differs From Black Salt? From Taste To Uses And Benefits",
      description:
        "Salt is the backbone of any given meal. As we sprinkle that familiar white seasoning onto our meals, we rarely pause to ponder the diversity of salts available to us. We see salt, a kitchen staple and the most important flavouring agent, as just table salt, which is used regularly in our kitchen. But if you explore, salt comes in various forms, each offering distinct taste profiles and culinary advantages. Besides regular salt, black salt is also commonly used in our households. Today we will uncover their unique characteristics, culinary applications, and potential health benefits. Table Salt Vs Black Salt: Know The Key Differences:1. What They Are:Regular salt, also known as table salt or refined salt, has stood the test of time as an integral part of our culinary traditions. It is typically derived from underground salt deposits or seawater, which undergoes a refining process to remove impurities. The result is a fine-textured, pure white salt that graces dining tables worldwide. Black salt, also known as kala namak or Himalayan black salt, is a treasure from the Indian subcontinent, known for its distinctive colour and sulfuric aroma. Extracted from the volcanic regions of India and Pakistan, black salt undergoes a unique production process, which gives the salt its unique properties. 2. How They Taste:The taste of regular salt is familiar, offering a clean, salty flavour that subtly enhances the natural tastes of ingredients in a dish. It is neutral and versatile, that's why it can blend seamlessly a variety of ingredients for a variety of recipes. All these characteristics make salt the top choice for everyday cooking.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Fitness",
    },
    {
      id: 13,
      heading:
        "World Hepatitis Day 2023: Understanding Different Types, Causes And Diagnosis",
      image:
        "https://c.ndtvimg.com/2020-07/mfrt64j8_world-hepatitis-day_625x300_28_July_20.jpg?q=50",
      description:
        "Hepatitis refers to the inflammation of the liver caused by hepatitis viruses A, B, C, D, and E. Despite sharing the same outcome of liver disease, these strains differ significantly in their modes of transmission, disease severity, geographical prevalence, and preventive measures. Globally, an estimated 354 million individuals are affected by hepatitis B or C, with many lacking accesses to testing and treatment. Hepatitis poses a significant social and economic burden on India, with over 40 million people infected with hepatitis B and 6 to 12 million people chronically infected with hepatitis C. To diagnosis hepatitis, a doctor will assess the patient's symptoms, study their medical history and conduct a physical examination of the liver to test for swelling. Blood tests are taken to check enzymes levels in the liver, as well as to determine the type of hepatitis. A liver ultrasound and biopsy might be conducted to check for inflammation and liver damage.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Fitness",
    },
    {
      id: 14,
      heading:
        "Egg Benjo: This Delicious Street Food From Indore Has A British Link",
      image:
        "https://c.ndtvimg.com/2023-07/qtd1t1e8_egg-sandwich_625x300_27_July_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
      description:
        "By now, you surely have a long list of customized and upgraded egg sandwich recipes. But trust us, it's not done yet! Eggs are so versatile and easy to cook that every corner of the world experiments with them every single day. Unfortunately, only a handful get the credit they deserve, while the rest remain hidden behind closed doors. Today, we will bring you one such egg-based dish that rules the streets of Madhya Pradesh and tastes oh-so-delicious. It's called Egg Benjo. Quite an interesting name, right? Let's find out more about the dish. Also Read: Egg-cellent Hack! 5 Best Ways To Determine If The Eggs You Eat Are FreshWhat Is Egg Benjo? History And Origin Of The Dish:To put it simply, Egg Benjo is a simple egg masala sandwich or a distant cousin of the Mumbai-style Egg Pav, where a spicy omelette is pressed between a pav to create an appetizing dish. But did you know that this dish has British origins? That's right!",
      type: "Travel",
      date: "August 21 2022",
      cat: "Food",
    },
    {
      id: 15,
      heading:
        "OnePlus 12 Camera Specifications Tipped Ahead of Launch, Might Include Periscope Zoom Camera",
      image:
        "https://i.gadgets360cdn.com/large/oneplus_11_review__back_gadgets360_1675768455558.jpg?downsize=950:*",
      description:
        "OnePlus 12 is expected to be launched in global markets including India in January next year. Although the launch is several months away, a Chinese tipster has leaked the phone's camera details. The OnePlus 11 5G successor is said to carry a Hasselblad-branded triple rear camera unit, headlined by a 50-megapixel Sony IMX9xx 1/1.4-inch primary camera. Last year, the Chinese smartphone company fitted a similar 50-megapixel triple rear camera setup on the OnePlus 11 5G. The OnePlus 12 is said to run on Snapdragon 8 Gen 3 SoC. It is expected to pack a 5,400mAh battery with support for 100W wired charging and 50W wireless charging. \nKnown tipster Digital Chat Station (translated from Chinese) has leaked the camera details of the OnePlus 12 on Weibo. As per the tipster, the upcoming handset will have a Hasselblad branded triple rear camera setup, comprising a 50-megapixel Sony IMX9xx 1/1.4-inch primary camera, coupled with a 50-megapixel ultra-wide lens, and a 64-megapixel OmniVision OV64B periscope camera with 3x optical zoom. \nGoing by the leaked specifications, the camera setup on the OnePlus 12 appears to have a slight boost over the OnePlus 11 5G. The latter packs a triple rear camera unit including a 50-megapixel 1/1.56-inch Sony IMX890 sensor with optical image stabilisation (OIS), a 48-megapixel ultra-wide angle camera with a 0.5-inch Sony IMX581 sensor, and a 32-megapixel telephoto camera with a 1/2.74-inch Sony IMX709 sensor. \nThe OnePlus 12 has been in the rumour mill for quite some time now. A recent leak suggested the specifications of the handset. It is said to run on Android 14 with OxygenOS 14 on top. The upcoming handset could feature a 6.7-inch fluid LTPO AMOLED display with a 2K resolution and 120Hz refresh rate. Qualcomm's unannounced Snapdragon 8 Gen 3 is expected to power the OnePlus 12. It is tipped to come with 16GB of LPDDR5X RAM and 256GB of UFS 4.0 storage. \nFor selfies, the OnePlus 12 might pack a 32-megapixel sensor on the front, arranged in the hole punch cutout on the display. It is said to feature an alert slider and an in-display fingerprint scanner for authentication. The handset is also said to house a 5,400mAh battery with fast 100W wired charging support and 50W wireless charging support. \nTo recall, the OnePlus 11 5G was launched in India in February with a price tag of Rs. 56,999 for the 8GB + 128GB0 storage configuration.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Technology",
    },
    {
      id: 16,
      heading:
        "Samsung Galaxy Z Flip 5 First Impressions: Big Upgrades in a Familiar Package",
      image:
        "https://i.gadgets360cdn.com/large/Samsung_Galaxy_Z_Flip_5_main_big_ndtv_1690352848765.jpg?downsize=950:*",
      description:
        "Samsung's Galaxy Z Flip 4 was a big upgrade over the Galaxy Z Flip 3. It managed to turn, what was a more fashion-forward foldable, into a very useful and practical smartphone with major improvements to its cameras and battery life. With the new Galaxy Z Flip 5, Samsung has added even more features to the mix. There's now a bigger cover display with its own widget-based interface, a new processor and improvements to the cameras. I got to spend some time with the Samsung Galaxy Z Flip 5 at the Galaxy Unpacked launch event, and here are my first impressions. \nThe Samsung Galaxy Z Flip 5's overall design has not changed by much and it still offers an IPX8 rating for water proofing. However, look closely and you'll quickly notice the expanded glass on the front that manages to hide a large 3.4-inch, Super AMOLED 60Hz display underneath. This new larger display has a resolution of 720 x 748 pixels (306ppi). Tapping on it wakes up the oddly shaped display which resembles a folder icon from Windows or Mac OS. \n Samsung's approach to the cover display's design on the Galaxy Z Flip 5 is very different compared to Motorola's more radical design for the same. The cover display on the Flip 5 has some really thick bezels on the top, left and right sides with a cutout at the bottom which completely avoids the LED flash and the two cameras. \nThe inner display on the Samsung Galaxy Z Flip 5 has not seen much of an upgrade. It seems to be the same 6.7-inch full-HD+ Dynamic AMOLED panel with a 120Hz refresh rate in a 22:9 aspect ratio. It still feels a bit cramped when browsing through content vertically. However, the aspect ratio of this main display keeps its footprint quite compact compared to other foldables such as the Oppo Find N2 Flip. The phone's weight is the same as before (187g) but is slimmer when folded (by 2mm) thanks to the new hinge mechanism. \nAccording to Samsung, the new hinge is more durable when subjected to drops or shocks and also allows for the zero-gap design between the two halves of the clamshell when folded shut (apart from reducing the display's crease). \nSamsung has gone with a Qualcomm Snapdragon 8 Gen 2 Mobile Platform for Galaxy in the Galaxy Z Flip 5, which is a customised version of the standard chipset just like on the Galaxy S23 series which launched earlier this year. Samsung claims that the new chipset brings improvements to image quality and battery life. \nThe Samsung Galaxy Z Flip 5 will be offered in two storage variants. The first with 8GB of RAM and 256GB of storage and the second with 512GB of storage, which is an improvement over last year's model which had a 128GB base variant.\nThe phone follows Samsung's recent trend with the standard Galaxy S23 series and offers the same camera hardware as on the previous Galaxy Z Flip 4. The Galaxy Z Flip 5 has a 12-megapixel primary camera with dual pixel PDAF and OIS with an 83-degree field of view (FOV). The ultra-wide camera offers a 12-megapixel sensor with a 123-degree FOV. Selfies are handled by a 10-megapixel camera. \nThe phone's battery capacity also remains the same at 3,700mAh, along with 25W wired charging and 15W wireless charging as before. \nThe software is where things have changed, but primarily for the cover display. The Samsung Galaxy Z Flip 5 runs One UI 5.1.1 with Android 13. The Galaxy Z Flip 5's Flex Window is basically a bigger version of its previous display, but it comes with a lot of added functionality. \nAs observed from previous leaks, it is indeed a widget-based interface. There's a widget for most native apps, but I could not spot any from Google during my brief hands-on time. One can place calls from the call log widget, check the weather, and even reply to notifications with a full keyboard, which is a big leap from the previous implementation, which used voice input for sending out replies. \nThe cover display cannot run full apps like on the Motorola Razr 40 Ultra (Review) which seems like a big missed opportunity for Samsung, but we will reserve our final opinion for the full review. The Flex Window also has quick toggles (Wi-Fi, Bluetooth, etc) and comes with Samsung Pay support. Samsung has also added the ability to show one's boarding pass at the airport from the outer display itself, thus reducing the need to open the phone. A neat trick which Samsung has included is Multi-Widget view, which basically uses the pinch gesture to give a zoomed-out view of all the active widgets in the cover display. \nThe Samsung Galaxy Z Flip 5's success depends heavily on the practicality of its new cover display and how frequently it reduces the need to unfold the main display. Our eyes are also on the new chipset which gives Samsung a natural edge in terms of performance over the competition, but we have to use it more to see if there is any improvement with imaging quality and battery life as well. There's more to come in the full review. ",
      type: "Travel",
      date: "August 21 2022",
      cat: "Technology",
    },
    {
      id: 17,
      heading:
        "Rocky Randhawa Borrows Rocky Balboa's Line For Gym Flex. See Ranveer Singh's Post",
      image:
        "https://c.ndtvimg.com/2023-07/7p3h0ig8_ranveersingh1200_625x300_31_July_23.jpg",
      description: `It's the first Monday after the release of Rocky Aur Rani Kii Prem Kahaani and Ranveer Singh is feeling the need – the need for a Monday Motivation post. The actor, whose performance as the titular Rocky of Karan Johar's film has been singled out for praise, shared a throwback picture of himself in the gym, flexing impressive muscles. It's no ordinary flex either; Ranveer captioned the post with a line borrowed from the OG Rocky – boxer Rocky Balboa written and played by Sylvester Stallone. He wrote: "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward." – ROCKY," adding the Monday Motivation hashtag. \nThe comments thread is fully appreciative of this Rocky.  "Now that's a classic line," read a comment. "Those biceps have every right to do anything," read another. "It's Ranveer Singh's world and we're just living in it," read a third. The Cult Fit Instagram handle wrote, "We're in love with this Rocky aur fitness ki prem kahani." \nSome comments were Rocky-specific. "Rocky ki itni achhi English kaise ho gayi," one fan wanted to know – in Rocky Aur Rani Kii Prem Kahaani, Ranveer Singh's character is a flashy young West Delhi man whose OTT style competes for attention with hilariously broken English. Another fan asked, "Why was your intro scene so drastically shortened?" (Editor's note – it was?) A third comment read, "What are you?" – in the film, Alia Bhatt, who plays Rani, asks Rocky more than once, "Tu kya hai?"`,
      type: "Travel",
      date: "August 21 2022",
      cat: "Bollywood",
    },
    {
      id: 18,
      heading: "Ananya Panday Goes Full Desi In New Poster Of Dream Girl 2",
      image:
        "https://c.ndtvimg.com/2023-07/untpt73o_ananya-_625x300_31_July_23.jpg",
      description: `Mumbai (Maharashtra): Makers of the upcoming comedy film Dream Girl 2 on Monday unveiled a new poster of their film. \nTaking to Instagram, actor Ayushmann Khurrana shared the poster and wrote, "Yeh hai Pari, meri Dream Girl! #DreamGirl2Trailer Out Tomorrow! #25AugustHogaMast #DreamGirl2 in Cinemas on 25th August.” \nThe poster depicts Ayushmann in a peculiar persona. Only his face is visible to the audience as he emerges from behind a bright curtain while Ananya could be seen looking at Ayushmann's character. \nThe ‘Liger' actor looked beautiful in traditional attire. She kept her hair open and accessorized her look with silver earrings and pink bangles. Makers introduced Ananya's character as Pari. \nTeam Dream Girl 2 will be unveiling the teaser of the film today, while the official trailer will be out on August 1. Soon after the makers unveiled the new postr, fans flooded the comment section with red hearts and fire emoticons. Actor Shanaya Kapoor commented, “Love it.” \nAnother user commented, “Finally!! Can't wait to see you Pooja.” The film will be out on August 25. Earlier it was supposed to be released in July. The delay is due to the extensive VFX work required for the film.`,
      type: "Travel",
      date: "August 21 2022",
      cat: "Bollywood",
    },
    {
      id: 19,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 20,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 21,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 22,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 23,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 24,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 25,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 26,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 27,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 28,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 29,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 30,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 31,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 32,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 33,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 34,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 35,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 36,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 37,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 38,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 39,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: 40,
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
  ]);
  return (
    <div>
      <Store.Provider value={[data, setData]}>{props.children}</Store.Provider>
    </div>
  );
}

export default ContextAPI;
