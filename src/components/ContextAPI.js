import React, { createContext, useState } from "react";

export const Store = createContext();
function ContextAPI(props) {
  const [data, setData] = useState([
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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
      id: "4",
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
      id: "5",
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
      id: "6",
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
      id: "7",
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
      id: "8",
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
      id: "9",
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
      id: "10",
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
      id: "11",
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
      id: "12",
      heading: "10 Vegetarian Foods Rich In Omega-3 Fatty Acids",
      image:
        "https://c.ndtvimg.com/2022-03/dt76ej2_omega-3-plant-based-foods_625x300_23_March_22.jpg",
      description:
        "Omega-3 fatty acids are a type of polyunsaturated fatty acids that are essential for good health. There are three main types of omega-3 fatty acids: ALA, EPA, and DHA. Foods rich in omega-3 fatty acids are important for good health due to several reasons. For one, omega-3 fatty acids have been shown to decrease the risk of cardiovascular diseases by reducing inflammation, lowering triglyceride levels, and preventing the formation of blood clots. \nDHA, specifically, is a major structural component of the brain and is important for brain development and function. Consuming omega-3-rich foods has been associated with a lower risk of cognitive decline, improved memory, and a reduced risk of mental disorders such as depression and anxiety. DHA is also found in high concentrations in the retina of the eye and is important for maintaining good vision and reducing the risk of age-related macular degeneration. \nOmega-3 fatty acids are often assumed to be a nutrient found in meats and other non-vegetarian foods. However, there are a variety of vegetarian foods that are abundant in this nutrient. Read on as we share a list of vegetarian foods you can add to your daily to increase your intake of omega-3 fatty acids. \n10 Vegetarian foods that are rich in omega-3 fatty acids: \n1. Chia seeds \nChia seeds are one of the best plant-based sources of omega-3 fatty acids, particularly alpha-linolenic acid (ALA). ALA is essential for brain health and may help reduce inflammation, lower cholesterol levels, and support heart health. \n2. Flaxseeds \nFlaxseeds are another excellent source of ALA. Including flaxseeds in your diet can help improve digestive health, reduce the risk of heart disease, and support healthy skin and hair. \n3. Hemp seeds \nHemp seeds are packed with omega-3 fatty acids, including ALA. Consuming hemp seeds may support heart health, reduce inflammation, and improve overall immune function. \n4. Walnuts \nWalnuts offer a great balance of omega-3 and omega-6 fatty acids. Regular consumption of walnuts may help lower blood pressure, improve brain function, and reduce the risk of certain chronic diseases. \n5. Brussels sprouts \nBrussels sprouts are a cruciferous vegetable that contains omega-3 fatty acids. These green gems are rich in antioxidants and fibre, which aid digestion, reduce inflammation, and support heart health. \n6. Algal Oil \nAlgal oil, derived from algae, is a marine-based vegetarian source of omega-3 fatty acids, particularly DHA and EPA. It supports brain health, reduces inflammation, promotes healthy eyes, and benefits heart health. \n7. Seaweed \nSome seaweed varieties, such as nori, offer omega-3 fatty acids. Seaweed is also a good source of iodine and antioxidants, and it supports healthy thyroid function and improves heart health. \n8. Spirulina \nSpirulina, a blue-green algae, contains significant amounts of omega-3 fatty acids. Adding spirulina to your diet can boost energy levels, support the immune system, and reduce inflammation. \n9. Edamame \nEdamame, or young soybean pods, is a rich source of omega-3 and omega-6 fatty acids. Edamame is also high in protein, fibre, and antioxidants, which help lower cholesterol levels, maintain bone health, and support heart health. \n10. Soybeans \nSoybeans are another legume that contains omega-3 fatty acids. Incorporating soy-based products like tofu, soy milk, or tempeh into your diet can help reduce the risk of heart disease, support bone health, and alleviate menopausal symptoms. \nRemember, it's important to consume a variety of omega-3-rich foods to obtain a balanced intake of fatty acids. Additionally, if you're vegetarian or vegan, consider supplementing with plant-based omega-3 supplements (such as algae-based omega-3 capsules) to ensure adequate intake.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Fitness",
    },
    {
      id: "13",
      heading:
        "Conjunctivitis And Eye Infection Cases Surge After Heavy Rainfall: Know Symptoms, Prevention Tips, Treatment And Remedies",
      image:
        "https://i.ndtvimg.com/i/2018-03/conjunctivitis_650x400_41520408169.jpg",
      description:
        'Amid heavy rainfall in Delhi and nearby areas over the past few weeks, conjunctivitis has become a prevalent concern. Conjunctivitis, also known as pink eye, is the most common type of eye infection. The humid weather offers a favourable environment for bacteria and viruses to grow and spread, contributing to increased cases of highly contagious eye infections. "We are getting at least 100 cases of conjunctivitis per day. There is usually a seasonal increase in conjunctivitis cases, which coincides with the flu season. The conjunctivitis cases are mostly caused by a virus," Dr JS Titiyal, chief of RP Centre for Ophthalmic Sciences at AIIMS said. \nSchools in Delhi have also reported rising cases of eye infection. It has also been noted that the infection is highly contagious and symptoms last for three to four days. \nAs conjunctivitis and other eye infections are spreading fast these days, we spoke to experts to understand the exact cause and tips to manage and prevent these. \nEye infection during monsoon: Know causes, treatment, prevention, symptoms and more \nSymptoms \nRed eyes, itching, eye pain, watery eyes, swelling, discharge from eyes, blurred vision and sensitivity to light are a few common symptoms of eye infection. \nRain and eye infections: What is the connection? \nThe surge in the number of cases can be attributed to various factors. \n"The combination of increased humidity and warmer temperatures during the rainy season produces ideal circumstances for the rapid reproduction of bacteria and viruses. Additionally, waterlogging of the contaminated water allows bacteria and germs to multiply quickly," said Dr Aparna Darshwal, HOD - Ophthalmology, Metro Hospital, Faridabad. \nHow to manage eye infections during monsoon \n"Relying on home treatments may not be sufficient in the majority of cases. It is better to visit with an ophthalmologist to get timely treatment. Self-medication is also not advisable in such circumstances," Dr Darshal advised. \nTreatment for eye infection \nThe current medical recommendation involves the use of antibiotic drops. "However, the type of infection can vary, whether it\'s viral or bacterial, and the severity may differ as well. Consequently, some cases may respond well to a single antibiotic drop, while others may require a combination of drops and ointments to effectively treat the condition. The treatment approach will be tailored according to the specific nature and severity of the eye infection to ensure the best possible outcome," Dr Johri explained. \nWhat should patients do at home? \nHome remedies alone can be inadequate to address the issue effectively. "However, it is recommended to follow a simple yet essential action that is washing the eyes with clean water at least three times a day, ensuring that the water makes direct contact with the eyeballs," Dr Johri added. \nIt is important to follow the prescribed dosage recommended by your doctor to ensure effective and safe management of the condition.',
      type: "Travel",
      date: "August 21 2022",
      cat: "Fitness",
    },
    {
      id: "14",
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
      id: "15",
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
      id: "16",
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
      id: "17",
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
      id: "18",
      heading: "Ananya Panday Goes Full Desi In New Poster Of Dream Girl 2",
      image:
        "https://c.ndtvimg.com/2023-07/untpt73o_ananya-_625x300_31_July_23.jpg",
      description: `Mumbai (Maharashtra): Makers of the upcoming comedy film Dream Girl 2 on Monday unveiled a new poster of their film. \nTaking to Instagram, actor Ayushmann Khurrana shared the poster and wrote, "Yeh hai Pari, meri Dream Girl! #DreamGirl2Trailer Out Tomorrow! #25AugustHogaMast #DreamGirl2 in Cinemas on 25th August.” \nThe poster depicts Ayushmann in a peculiar persona. Only his face is visible to the audience as he emerges from behind a bright curtain while Ananya could be seen looking at Ayushmann's character. \nThe ‘Liger' actor looked beautiful in traditional attire. She kept her hair open and accessorized her look with silver earrings and pink bangles. Makers introduced Ananya's character as Pari. \nTeam Dream Girl 2 will be unveiling the teaser of the film today, while the official trailer will be out on August 1. Soon after the makers unveiled the new postr, fans flooded the comment section with red hearts and fire emoticons. Actor Shanaya Kapoor commented, “Love it.” \nAnother user commented, “Finally!! Can't wait to see you Pooja.” The film will be out on August 25. Earlier it was supposed to be released in July. The delay is due to the extensive VFX work required for the film.`,
      type: "Travel",
      date: "August 21 2022",
      cat: "Bollywood",
    },
    {
      id: "19",
      heading:
        "Brinjal, Aubergine Or Eggplant? Know The Fascinating History Of This Powerhouse Vegetable",
      image:
        "https://c.ndtvimg.com/2023-08/mh2h8g4g_aubergine_625x300_01_August_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
      description:
        "Ever wondered what 'baingan' is called in English? Some say brinjal, while chefs and food experts prefer aubergine, adding sophistication to this humble veggie. Others opt for eggplant, leaving us utterly perplexed with multiple names for the same veggie. Teaching kids the English names of veggies becomes even more challenging. But fear not, we'll take you on a journey to uncover the origins and history of this versatile vegetable and reveal the secrets behind its many names. Let's delve into the captivating story of baingan. \nWhat Makes Baingan A Popular Vegetable Across The Globe? \nBelieve it or not, baingan is considered exotic in the world of global gastronomy. In fact, according to some theories, it is also referred to as the 'king of vegetables' due to its rich purple colour and bulky texture, which also makes the vegetable a perfect veg substitute for various meat-based dishes. You will find baingan being widely used in countless recipes in Middle Eastern, Asian and some European countries including France and Italy. Alongside its culinary versatility, baingan is great for your health too. This powerhouse vegetable contains high amount of fibre, antioxidants, and minerals and is low in calories and sodium, making it a perfect ingredient to aid digestion, gut-health, weight loss, health blood pressure levels amongst others. \nWhat Is The Origin Of Baigan | Where Was It First Found: \nYou would be fascinated to know that baingan is considered a native to India. As per historians, somewhere around 5000 years ago, a group of people migrated from Southeast Asia to the Chota Nagpur Plateau and domesticated a spiny bitter fruit into a delicious vegetable and named it 'vartaku'. Food Historian KT Achaya, in his book named 'A Historical Dictionary Of Indian Food', explained that it was then called 'vatingana' in Sanskrit and later Bengal made it 'begun' for them and in Hindi it got the name 'baingan'. And that's how the vegetable got popularised across India. \n \nBrinjal Vs. Aubergine Vs. Eggplant: History Behind The English Names Of Baigan: \nWith popularity, the vegetable grabbed attention of the Buddhist monks who then went on travelling to the world along with the vegetable. According to multiple historical theories, it then went to Persia where baingan was named 'badinjan', and then the Arabs referred to it as 'al-badinjan'. The Arabs then took it to Spain where the Catalans named the vegetable 'al-berjinia'. It then became what we know as 'aubergine' in French. Eventually 'aubergine' became a part of the English terms and terminology. \nHowever, the Spanish people called the vegetable 'berenjena', which was then taken by the neighbouring country Portuguese, who named it 'beringela'. Finally, after touring the world, the mighty baingan again came back to India along with the Portuguese, where it finally got the name 'brinjal'. \nNow, you might be wondering, why is it called eggplant?! Well, that has quite a funny story to it! The white variety of the vegetable, which are somewhat round and small in shape, looked much like eggs hanging on tree. That's how it got popularised as eggplant, which now is majorly referred to the small-sized baingan.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Food",
    },
    {
      id: "20",
      heading:
        "How To Stop Your Stomach From Growling And Avoid Embarrassing Situations",
      image:
        "https://c.ndtvimg.com/2023-08/r5m2rev_stomach-growling_625x300_01_August_23.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      description:
        "One of the most embarrassing situations is experiencing a sudden, loud stomach growl at the most inconvenient times. Whether it happens during a crucial meeting, a quiet yoga class, or a romantic dinner, that rumbling sound can leave us feeling flustered and hoping that no one heard it. However, deep down, we know someone probably did. While a one-off incident is nothing to worry about, if it happens frequently, it's essential to address the issue to avoid embarrassment in the future. Here is a list of diet tips that can help silence those growls and maintain a healthy tummy. \nWhy Does Your Stomach Growl? \nWhen food, liquid, and gas pass through the stomach and small intestine together, it produces a rumbling sound in the stomach that can be felt and heard. This mostly occurs when the body is hungry or experiencing indigestion. Sometimes, excessive growling accompanied by pain, constipation, or diarrhoea may indicate serious health issues such as food allergies, infections, or irritable bowel syndrome (IBS), which require medical intervention. However, for hunger and indigestion-related growling, the following tips can come in handy. \nHere Are 10 Diet Tips That Will Stop Your Stomach from Growling: \n1. Step Out After a Protein-Packed Breakfast: \nBreakfast is indeed the most important meal of the day, and opting for a protein-rich morning feast can work wonders in keeping your stomach satisfied. Proteins take longer to digest than carbohydrates, helping you stay full for an extended period. Start your day with eggs, moong dal chilla, or a smoothie blended with protein-rich ingredients like almond milk, chia seeds, and nut butter. Here are some other protein-rich breakfast dishes you can opt for. \n2. Include Fibre in Every Meal: \nFibre is a magical component when it comes to satiety. Foods high in fibre not only aid digestion but also keep your stomach feeling full. Incorporate whole grains like brown rice and oats into your meals, and don't forget a generous portion of fruits and vegetables. Not only do they add essential nutrients to your diet, but they also act as natural hunger tamers. \n3. Know When to Stop: \nIn a hurry, we often gobble down meals without paying attention to our body's signals. Practising mindful eating can help us recognize true hunger and prevent overeating. Chew your food slowly, savour each bite, and put your fork down between bites. \n4. Stay Hydrated: \nDehydration can often be mistaken for hunger, leading to unnecessary snacking and stomach growls. Always keep a water bottle handy and aim to drink at least eight glasses of water daily. You can also infuse water with fruits or herbs for added flavour, making hydration more enjoyable. \n5. Don't Skip Meals: \nSkipping meals might seem like an effective way to cut calories, but it can lead to excessive hunger and more significant stomach growls later on. Stick to regular meal times and enjoy balanced, nutritious meals to keep your energy levels steady throughout the day. \n6. Snack Smartly: \nSnacking can be a double-edged sword when it comes to preventing stomach growls. Opt for snacks that combine protein and fibre to keep you full until your next meal. Nuts, seeds, Greek yoghurt, and sliced fruits with nut butter are excellent choices. Avoid sugary and processed snacks, as they can cause rapid spikes in blood sugar, leading to sudden hunger pangs. Here are some fibre-rich snacks to add to your menu. \n7. Spice Up Your Meals: \nIncluding spicy ingredients in your meals can help curb hunger. Spices like chilli peppers contain capsaicin, which can temporarily reduce appetite and boost metabolism. Adding a touch of spice to your dishes can be a flavorful way to keep your stomach from growling. \n8. Plan Ahead: \nBeing prepared with healthy snacks and meals can prevent you from reaching for unhealthy options when hunger strikes. Plan your meals ahead of time, and pack nutritious snacks like carrot sticks, hummus, or trail mix when you're on the go. \n9. Get Enough Sleep: \nA good night's sleep prevents excessive hunger. Lack of sleep can disrupt the balance of hunger-regulating hormones, leading to increased cravings and stomach growls. Aim for 7-9 hours of quality sleep every night to keep your appetite in check. \n10. Pick The Glass Of Water For Quick Relief \nWater comes as a saviour when your stomach starts acting up all of a sudden. Gulp down a glass or more of water for a quick-fix solution. You may find some relief when nothing else can be done. \nIncorporating these diet tips into your daily routine can lead to a happier, more contented stomach and a healthier relationship with food. So, muffle that growling sound and prevent those uncomfortable situations.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Food",
    },
    {
      id: "21",
      heading: "Weight Loss Tips: What Is The Best Time To Workout?",
      image:
        "https://c.ndtvimg.com/2023-07/7c7bp2g8_exercises-for-toned-body_625x300_25_July_23.jpg",
      description:
        "The time of your workout can influence your workout in several ways. However, the extent to which it matters may vary depending on individual preferences and circumstances. Your body's energy levels can fluctuate throughout the day due to factors like circadian rhythms and sleep patterns. \nMany people find that they have higher energy levels and greater physical performance during certain parts of the day. Choosing a time when you feel most energetic can enhance your workout performance. Selecting a workout time that fits into your daily routine and is feasible for you to maintain consistently is crucial. \nIf you choose a time that frequently conflicts with your responsibilities or schedule, it may become difficult to stay consistent with your workouts. Consistency is key to achieving long-term fitness goals. In this article, we discuss how different times of the day can be beneficial for working out. \n7 Potential time slots that are considered good for working out: \n1. Early Morning (6-9 AM) \nThis time slot is often favored by people who enjoy starting their day with exercise. Working out in the morning can boost metabolism, provide energy for the day, and set a positive tone for the entire day ahead. \n2. Late Morning (10-11 AM) \nFor those who prefer a slightly later start, late morning is a good time to workout. By this time, the body is warmed up, flexibility is improved, and muscle strength is increased, reducing the risk of injury. \n3. Lunchtime (12-2 PM) \nSome people find it convenient to exercise during their lunch break. It can serve as a productive break from work, helping to alleviate stress and enhancing overall productivity for the rest of the day. \n4. Afternoon (3-5 PM) \nThis time slot can be suitable for individuals who naturally have higher energy levels during the afternoon. It could be a good time for high-intensity workouts or team sports, as body temperature tends to be higher, leading to better performance. \n5. Early Evening (5-7 PM) \nFor many people, early evening is a popular workout time. After the workday, it allows time to decompress and shake off the day's stress. Additionally, this time slot provides an opportunity to exercise with a partner or attend group fitness classes. \n6. Late Evening (7-9 PM) \nFor those who prefer a workout closer to bedtime, late evening can be a good option. However, it is recommended to allow some time (around an hour) between exercise and sleep to allow the body to cool down before bedtime. \n7. Night Owl (10 PM-Midnight) \nSome individuals find it suitable to exercise late at night. While this can be a good way to relieve stress and gain energy for night owls, it's important to ensure adequate sleep after completing the workout. \nUltimately, the best time to work out is whenever you can consistently adhere to a routine that suits your lifestyle, goals, and preferences. Listen to your body, experiment with different time slots, and find what works best for you in terms of energy levels, motivation, and schedule.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Fitness",
    },
    {
      id: "22",
      heading:
        "Warner Bros. Apologises After 'Barbenheimer' Tweets Spark Criticism In Japan: Report",
      image:
        "https://c.ndtvimg.com/2023-08/ocr2grmg_barbie_625x300_02_August_23.jpg",
      description:
        "Los Angeles: The Warner Bros. Film Group in the United States has issued a public apology about social media activity concerning the 'Barbenheimer' meme, which has caused outrage in Japan, Variety reported. \"Warner Brothers sincerely apologises for its recent insensitive social media engagement.\" \"The studio sincerely apologises,\" the firm wrote in an email to Variety on Tuesday. \nThis comes after public criticism of Warner in Japan, the launch of an online petition against the studio, and an unexpected step by Warner's Japanese distribution arm. \nWarner Bros. Japan issued a statement on its official Japanese-language Barbie Twitter account on Monday, criticising the studio's U.S. division for participating in the 'Barbenheimer' social media frenzy. \nThe Barbie US Twitter account has interacted with some fan posts regarding 'Barbenheimer,' which alludes to the simultaneous summer releases of Universal's Oppenheimer and Warner Bros.' Barbie. \nBoth films were released on July 21 in North America and many overseas regions and quickly became box office smashes. During their debuts, they helped propel the box office to its fourth highest-grossing weekend in history. \nOppenheimer has not yet been released in Japan, and no release date has been set. While the film debates the issue of whether bombings ultimately saved lives and brought world peace, the current clash highlights the enduring sensitivity of the nuclear weapons debate in Japan, as per Variety. \nAccording to some estimates, the two atomic bombs launched by the United States on Hiroshima and Nagasaki in 1945 killed as many as 250,000 people. \n\"We consider it extremely regrettable that the official account of the American headquarters for the movie 'Barbie' reacted to the social media postings of 'Barbenheimer' fans,\" Warner Bros. Japan wrote in a statement published on the 'Barbie' Japan Twitter profile. \"We take this situation very seriously. We are asking the U.S. headquarters to take appropriate action. We apologize to those who were offended by this series of inconsiderate reactions. Warner Bros Japan.\" \nIn response to one 'Barbenheimer' fan art poster depicting Margot Robbie's Barbie perched on Cillian Murphy's J. Robert Oppenheimer's shoulders in front of a flaming atomic mushroom cloud, the 'Barbie' U.S. Twitter account tweeted, \"It's going to be a summer to remember.\" Twitter, now known as X, updated the tweet with a community comment explaining the historical background of the mushroom cloud picture. \n\"At 8:15 a.m. on August 6, 1945 (Showa 20 Hiroshima for the first time in human history,\" the Twitter note reads. \"The particular nature of the damage caused by the atomic bombs is that mass destruction and mass murder occurred instantaneously and indiscriminately.\" \nIn Japan, the 'Barbenheimer' craze has drawn criticism for trivialising the horrific catastrophe wrought by atomic bombs. In recent days, the hashtag #NoBarbenheimer has been trending across the country.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Hollywood",
    },
    {
      id: "23",
      heading:
        "Want A Healthy Tikki? Try This Delicious Chana Dal And Cabbage Tikki",
      image:
        "https://c.ndtvimg.com/2023-08/gq5bolgg_cabbage-tikki_625x300_01_August_23.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
      description:
        "Crisp and flavourful tikkis are the quintessential desi snack. Whether you prefer them plain, with chutneys and sauces, or mixed with chaat - tikkis are always a delight. There are so many mouth-watering varieties: aloo tikki, soya tikki, paneer tikki and others. Now, tikkis are often considered an indulgence. But what if we told you that they can be enjoyed even while dieting? We have a special recipe for a high-protein tikki that you need to try: Chana Dal And Cabbage Tikki. This nutritious snack can easily be prepared at home with just a handful of ingredients. First, check out how it can be good for you: \nWhy Is Chana Dal And Cabbage Tikki Healthy? \n1. It is high in protein \nChanal dal is a great source of vegetarian protein. It can curb your hunger pangs and keep you well-nourished. The addition of besan further enhances the protein content of this snack. \n2. It is rich in vitamins and minerals \nAlong with chana dal, this tikki also contains the goodness of cabbage, carrots, ginger and coriander. These ingredients are packed with many vitamins, minerals and antioxidants, essential for your overall health. \n3. It requires less oil \nThis tikki requires only a small amount of oil, as it is pan-fried, not deep-fried. You may also choose to bake it. Thus, you can rest assured that you are not eating a snack that is too high in calories. \n4. It may aid in weight loss and blood sugar control \nSince this tikki is high in fibre and protein, it promotes satiety and may help manage blood sugar levels too. This makes it a good snacking option for those wanting to lose weight and/or those suffering from diabetes. The main ingredients - chana dal, cabbage, carrots, coriander and besan - are all considered to be diet-friendly. \nNote that chaat masala is the main spice mix used to flavour these chana dal tikkis. Packaged chaat masalas may contain too much salt and/or artificial additives. Hence, to derive maximum benefits, make chaat masala at home and store it for future use as well. Click here for an easy recipe. Now let's dive into the preparation of the tikki itself: \nHow To Make Chana Dal Cabbage Tikki | Easy Recipe For Healthy Dal Tikki \nWash and soak chana dal for a few hours. Later, drain the water and grind the dal until you get a thick paste. Transfer this paste to a large bowl. Then add chopped cabbage, carrot, green chillies and coriander leaves to it. Also add spice powders, chaat masala and salt to taste. Now, in a small pan or vessel for tadka, heat oil and temper cumin seeds and chopped ginger. Mix this tadka with the chanal dal mixture in the bowl. Finally, combine everything well with roasted besan. \nBreak off small pieces of the mixture and flatten them into circular shapes. Pan-fry the tikkis until both sides turn golden brown. Enjoy them hot with fresh mint (pudina) chutney.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Food",
    },
    {
      id: "24",
      heading:
        'The Internet Calls Bhagavad Gita Quote In Oppenheimer Sex Scene "Absolutely Unnecessary"',
      image:
        "https://c.ndtvimg.com/2023-07/p8tqnqio_oppenheimer1200_625x300_25_July_23.jpg",
      description:
        'As a mushroom cloud of controversy threatens to overwhelm Oppenheimer\'s run in India, social media as always offers an insight into public opinion. A sex scene featuring a line from the Bhagavad Gita has caused official outrage with Union Minister of Information and Broadcasting Anurag Thakur pulling up the Censor Board for passing the scene and demanding it be deleted. The scene that has caused offence shows protagonist Robert Oppenheimer, played by Cillian Murphy, in an intimate moment with Jean Tatlock, played by Florence Pugh; she opens his copy of the Gita and asks him to read from which he does. \nThe line of scripture used in the scene is one that is famously associated with Robert Oppenheimer: "Now I am become death, the destroyer of worlds."  He is believed to have quoted it while watching the atom bomb he created detonate in a test. Exactly why director Christopher Nolan opted to use it in a sex scene in the film is unclear - there seems to be no good reason other than creative licence. \nOn Twitter, folks are mostly baffled, their outrage perhaps tempered perhaps by the reverence that Christopher Nolan commands among Indian fans. As a tweet points out, the filmmaker behind movies like Inception, Memento and the Dark Knight trilogy is not known for sex scenes. Some tweets called the placement of the Gita quote in a sex scene "awkward and avoidable" and "absolutely unnecessary." The general consensus is that this Nolan creative choice makes little sense. \nOver the weekend, Uday Mahurkar, Information Commissioner with the government of India shared this press release from the \'Save Culture Save India Foundation.\' \nOppenheimer, which has received glowing reviews from critics and will likely generate Oscar buzz, documents the making of the first nuclear weapons. In addition to Cillian Murphy and Florence Pugh, the stacked cast features Emily Blunt, Robert Downey Jr and Matt Damon. Oppenheimer opened last Friday and made over ₹ 48 crore in its first weekend in Indian cinemas.',
      type: "Travel",
      date: "August 21 2022",
      cat: "Hollywood",
    },
    {
      id: "25",
      heading: "Paul Reubens, Best-Known As Pee-Wee Herman, Dies At 70",
      image:
        "https://c.ndtvimg.com/2023-08/ftul59eg_-paul-reubens-_625x300_01_August_23.jpg",
      description:
        'Paul Reubens, the US comic who became famous in the 1980s for playing eccentric man-child Pee-wee Herman, and later infamous for his arrest at an adult theater, has died aged 70. Reubens died Sunday after a six-year battle with cancer which he had not publicly disclosed, according to a statement on the actor\'s official social media accounts. "Last night we said farewell to Paul Reubens, an iconic American actor, comedian, writer and producer whose beloved character Pee-wee Herman delighted generations of children and adults with his positivity, whimsy and belief in the importance of kindness," it said. \n"Paul bravely and privately fought cancer for years with his trademark tenacity and wit." \nA Facebook post included a quotation posthumously attributed to Reubens. \n"Please accept my apology for not going public with what I\'ve been facing the last six years," he said. \nLate-night host Jimmy Kimmel led the tributes, calling Reubens "a brilliant and original comedian who made kids and their parents laugh at the same time." \n"He never forgot a birthday and shared his genuine delight for silliness with everyone he met. My family and I will miss him," he posted on social media. \nBorn in New York state in 1952, Reubens launched his career as a comedian in Los Angeles in the 1970s. He introduced his most famous bow-tie-wearing persona in a 1980 stage show called The Pee-wee Herman Show. The production was a hit and led to an HBO special the following year. In 1985, Reubens teamed up with director Tim Burton to bring his character to the big screen, starring in "Pee-wee\'s Big Adventure." "Pee-wee\'s Playhouse" became a US television sensation, running from 1986-1990, with Reubens staying in character during interviews throughout its duration. But in 1991, Reubens\' career was dramatically derailed after he was arrested at an adult theater in Florida, and pleaded no contest to indecent exposure. The scandal was widely covered, and Reubens largely disappeared from the public eye for several years. Reubens later had minor roles in films such as Blow, starring Johnny Depp and Penelope Cruz, and television shows including 30 Rock and Ally McBeal. He also reprised the character of Pee-wee Herman in a number of television appearances, a stage show revival that went to Broadway, and 2016 Netflix film "Pee-wee\'s Big Holiday." \n"I have always felt a huge amount of love and respect from my friends, fans and supporters," said Reubens\' posthumous quote. Listen to the latest songs, only on JioSaavn.com "I have loved you all so much and enjoyed making art for you."',
      type: "Travel",
      date: "August 21 2022",
      cat: "Hollywood",
    },
    {
      id: "26",
      heading:
        'To Son Ranveer, 18 Today, Birthday Wish From Mom Sonali Bendre: "You Can Do It"',
      image:
        "https://c.ndtvimg.com/2023-08/ii9ag8s_ranveer_625x300_11_August_23.jpg",
      description:
        "New Delhi: Sonali Bendre's latest Instagram entry will make you go aww. The actress has dropped an adorable birthday wish for her son, Ranveer Behl. He turns 18. She has picked some precious memories from Ranveer's childhood days for the special birthday post on Instagram. While the first photograph captured Ranveer's goofy and fun side, the next slide featured a picture-perfect frame of the birthday boy posing with his parents. Sonali Bendre is married to filmmaker and entrepreneur Goldie Behl. The couple got married in 2002. Sonali Bendre's birthday note for Ranveer read, “One last time before he leaves the nest and I can embarrass him publicly! Happy Birthday, Ranveer! This year is going to be amazing, I know you can do it!” Reacting to the post, Maheep Kapoor wrote, “Happy Birthday Handsome.” Celebrity stylist Anaita Shroff Adajania also wished a very “happy birthday” to Ranveer. Sussanne Khan's sister Farah Khan Ali commented: “Happy birthday Ranveer. May you shine bright. Have an amazing day and year. (red heart emojis)” Huma Qureshi simply dropped a red heart in the comments. \nNew Delhi: Sonali Bendre's latest Instagram entry will make you go aww. The actress has dropped an adorable birthday wish for her son, Ranveer Behl. He turns 18. She has picked some precious memories from Ranveer's childhood days for the special birthday post on Instagram. While the first photograph captured Ranveer's goofy and fun side, the next slide featured a picture-perfect frame of the birthday boy posing with his parents. Sonali Bendre is married to filmmaker and entrepreneur Goldie Behl. The couple got married in 2002. Sonali Bendre's birthday note for Ranveer read, “One last time before he leaves the nest and I can embarrass him publicly! Happy Birthday, Ranveer! This year is going to be amazing, I know you can do it!” Reacting to the post, Maheep Kapoor wrote, “Happy Birthday Handsome.” Celebrity stylist Anaita Shroff Adajania also wished a very “happy birthday” to Ranveer. Sussanne Khan's sister Farah Khan Ali commented: “Happy birthday Ranveer. May you shine bright. Have an amazing day and year. (red heart emojis)” Huma Qureshi simply dropped a red heart in the comments. \nLast year, Sonali Bendre shared a happy picture of Ranveer on Instagram to mark his 17th birthday. Her caption screamed love from miles and a half away. “When your son is a teenager who shies away from clicking photos, this is the best one can do…Happy Birthday Ranveer, don't hold it against me,” she captioned the post. \nOn the work front, Sonali Bendre was last seen in The Broken News, alongside Jaideep Ahlawat and Shriya Pilgaonkar. The web show is currently streaming on Zee 5. \nLast month, the actress announced that she has already wrapped up The Broken News season 2. ",
      type: "Travel",
      date: "August 21 2022",
      cat: "Bollywood",
    },
    {
      id: "27",
      heading: "Wonder Woman 3: DC Has No Immediate Plans For The Film",
      image:
        "https://c.ndtvimg.com/2023-08/1b5fdt6g_gal-gadot_625x300_11_August_23.jpg",
      description:
        "Los Angeles: Despite Hollywood star Gal Gadot's recent comments about Wonder Woman 3, DC Studios is reportedly not looking to make the third chapter in the movie series anytime soon. Multiple sources told news outlet Variety that \"Wonder Woman\" 3 is not in development at DC Studios. In a recent interview, Gal Gadot had claimed that DC Studios heads James Gunn and Peter Safran told her they would develop Wonder Woman 3 together. \n\"I love portraying Wonder Woman. It's so close to and dear to my heart. From what I heard from James and from Peter is that we're gonna develop a 'Wonder Woman 3' together,\" the actor had said. \nGal Gadot further talked about her future as Diana Prince aka Wonder Woman during a profile interview with Flaunt magazine. \n\"I was invited to a meeting with James Gunn and Peter Safran and what they told me, and I'm quoting: 'You're in the best hands. We're going to develop 'Wonder Woman 3' with you. (We) love you as Wonder Woman- you've got nothing to worry about.' So time will tell,\" she had said. \nGal Gadot first played Wonder Woman in Zack Snyder's DC Universe, debuting in \"Batman v Superman: Dawn of Justice\" before leading her own two standalone films: Wonder Woman and Wonder Woman 1984.\" She most recently made cameos as Wonder Woman in DC films \"Shazam! Fury of the Gods\" and The Flash.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Hollywood",
    },
    {
      id: "28",
      heading: "Heart: 9 Tips That Will Help Manage Diabetes",
      image:
        "https://c.ndtvimg.com/2023-04/j92hc478_diabetes_625x300_03_April_23.jpg?q=50",
      description:
        "Diabetes is one of the most common cardiovascular diseases. It occurs when our blood glucose is high. Having diabetes can increase one's risk of various other diseases. Hence, it is necessary to prevent as well as treat diabetes. \nIf you already have diabetes, it is not too late to take steps to treat it or even improve your blood sugar levels. There are various ways in which you can manage diabetes and reduce blood sugar levels. In this article, we share tips that will help manage your blood sugar levels. \n8 Tips that can help manage diabetes and reduce blood sugar levels: \n1. Manage your diet \nOne of the most effective ways to manage diabetes is to follow a healthy diet. Avoid sugary and processed foods, and focus on consuming whole, unprocessed foods that are rich in fibre. Incorporate plenty of fruits, vegetables, whole grains, lean proteins, and healthy fats into your meals. Additionally, portion control is crucial to maintain stable blood sugar levels. \n2. Stay physically active \nRegular exercise is essential for managing diabetes. Engaging in aerobic activities like walking, jogging, swimming, or cycling can help improve insulin sensitivity and lower blood sugar levels. Aim for at least 30 minutes of moderate-intensity exercise most days of the week. \n3. Maintain a healthy weight \nLosing excess weight can significantly improve insulin sensitivity and help manage diabetes. Adopting a balanced diet and exercising regularly can lead to weight loss, resulting in better control of blood sugar levels. \n4. Limit carbohydrate intake \nCarbohydrates are converted into sugar during digestion and can cause spikes in blood glucose levels. Focus on consuming complex carbohydrates like whole grains and legumes rather than refined carbohydrates such as white bread, pastries, and sugary drinks. Monitor your carbohydrate intake and spread it evenly throughout the day to avoid drastic blood sugar fluctuations. \n5. Manage stress levels \nChronic stress can contribute to elevated blood sugar levels. Find healthy ways to cope with stress such as practicing mindfulness, yoga, deep breathing exercises, or engaging in hobbies that help you relax. Get enough sleep and prioritise self-care activities to reduce stress levels. \n6. Stay hydrated \nDrinking an adequate amount of water can help regulate blood sugar levels and promote overall health. Aim to drink at least 8-10 glasses of water per day and limit the consumption of sugary beverages. \n7. Quit smoking \nSmoking not only increases the risk of developing diabetes but also worsens its complications. If you smoke, consider seeking professional help to quit smoking and improve your overall health. \n8. Monitor blood sugar levels regularly \nRegular monitoring of blood sugar levels is vital for managing diabetes. Follow the recommended guidelines provided by your healthcare provider to check your blood sugar levels at home and keep a record of the results. This will help you track your progress and make necessary adjustments to your lifestyle. \nRemember lowering your blood sugar levels is a gradual process, and always consult with your healthcare provider before making any significant changes to your lifestyle or starting a new exercise regime.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Fitness",
    },
    {
      id: "29",
      heading: "How To Whip Up Lip-smacking Homemade Jam In Minutes",
      image:
        "https://c.ndtvimg.com/2023-08/k48gk4ro_jam_625x300_10_August_23.jpg",
      description:
        "Jam, a staple in most households and a favourite among many is a delightful treat enjoyed on a daily basis. Kids particularly love it, often turning to jam when they're feeling a bit choosy about their meals. Whether spread on bread, roti, or paratha, it adds that extra touch of flavour. While the market offers a variety of jam brands in different flavours, the cost can add up over time. On the flip side, there are those who prefer the simplicity and affordability of homemade jam, avoiding the additives found in store-bought options. If you fall into this category and want to treat your family to homemade goodness, consider these foolproof tips for crafting the perfect jam right in your kitchen. \nHere's How To Whip Up Lip-smacking Homemade Jam In Minutes: \n1. Picking the Right Fruit \nAlthough jam can be made from a range of fruits, your choice significantly impacts the taste. It's crucial to avoid using overripe or damaged fruits. Always opt for fresh, ripe fruits that aren't too soft. If you're aiming for jam, slightly less ripe fruits are your best bet. \n2. Using the Right Sugar \nFor a better flavour, always go for granulated sugar when making jam. However, remember that the sugar needs to dissolve completely before the mixture boils. Failing to do so might result in a grainy texture, so be patient and ensure proper dissolution. \n3.Getting Your Jars Ready \nProperly preparing your jars is essential to maintain the taste of your jam. Wash your glass jars thoroughly with warm, soapy water and make sure they're completely dry. To be extra cautious, give them a wipe-down or leave them in the sun for a bit. \n4.Dealing with Consistency Issues \nSometimes, your homemade jam might not have the thickness you're aiming for, unlike store-bought varieties. If you encounter this issue, here are some easy solutions. \n5. Give it Another Cook \nWhen your jam turns out thinner than you'd like, simply put it back in the pot and gently heat it again until it thickens. Just remember to keep stirring to prevent sticking. \n6.Let it Set \nAfter cooking, you might find your jam is a bit runny. Don't fret - it might thicken as it cools down. You can leave the jam at room temperature or pop it in the fridge for a few hours to achieve the desired consistency. \nWith these simple yet effective tips, you're all set to create a homemade jam that's as delicious and satisfying as store-bought versions. Enjoy the process and relish the taste of your very own concoction.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Food",
    },
    {
      id: "30",
      heading:
        "iQoo Z7 Pro 5G Teased to Get 120Hz AMOLED Display, MediaTek Dimensity 7200 5G SoC",
      image:
        "https://i.gadgets360cdn.com/large/iqoo_z7_pro_5g_twitter_1690260813636.jpg?downsize=950:*",
      description:
        "iQoo Z7 Pro 5G is set to launch in India on August 31. The Vivo sub-brand has now revealed several details about the upcoming iQoo Z series smartphones just weeks ahead of the official debut. The iQoo Z7 Pro 5G is confirmed to feature a high refresh rate AMOLED display. It is also teased to run on a MediaTek chipset. Further, the iQoo Z7 Pro 5G will include a 64-megapixel camera sensor. The handset is expected to come as a follow-up to the iQoo Z7. \niQoo, via a press release on Friday, August 11, announced key specifications of the iQoo Z7 Pro 5G. The handset will have a 3D Curved AMOLED display with 120Hz refresh rate. It is confirmed to come with an anti-glare (AG) glass finish on the rear. In the camera department, the handset will feature a 64-megapixel aura light rear camera, with support for OIS (optical image stabilisation). \nAs expected, following multiple leaks and rumours, the iQoo Z7 Pro 5G is confirmed to have a MediaTek Dimensity 7200 5G SoC under the hood. The recently launched Vivo V27 also runs on the same chipset. The iQoo handset claimed to have scored over 7,00,000 points on the benchmarking website AnTuTu. Further, the smartphone is teased to have a sim design with a 7.36mm thickness. iQoo has confirmed that the iQoo Z7 Pro 5G will be manufactured at Vivo's Greater Noida facility in India. \niQoo has already announced that the launch of iQoo Z7 Pro 5G will take place on August 31 in India. The company and Amazon India has been teasing the smartphone via identical microsite for the past few days. It appears to have a curved display and centrally-aligned hole-punch cutout on the screen for the selfie camera \nThe iQoo Z7 Pro 5G is said to be priced between Rs. 25,000 and Rs. 30,000 in India. The iQoo Z7 Pro 5G is expected to succeed the iQoo Z7.",
      type: "Travel",
      date: "August 21 2022",
      cat: "Technology",
    },
    {
      id: "31",
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: "32",
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: "33",
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: "34",
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: "35",
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: "36",
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: "37",
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: "38",
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: "39",
      heading: "",
      image: "",
      description: "",
      type: "Travel",
      date: "August 21 2022",
      cat: "",
    },
    {
      id: "40",
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
