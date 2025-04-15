import ArticleLayout from '../../components/ArticleLayout.jsx';

export default function FacialRecognition() {
  return (
    <ArticleLayout title="Facial Recognition Technology" date="July 9, 2020">
      <p className="text-lg font-medium mb-8">
        Facial Recognition Technology is a developing technology that shines a light on a new aspect of security and identity.
        How does it work and what are some of its practical application successes and failures in our modern-day society?
      </p>

      <img
        src="/FacialRecognition.webp"
        alt="Facial recognition technology at Delta gate"
        className="rounded-lg shadow-lg mb-4"
      />
      <p className="text-center text-sm italic text-gray-500 mb-10">
        Picture by John Paul Van Wert from Ranks Studio through Wikimedia Commons — Delta Airlines’ new biometric scanning technology at Hartsfield-Jackson International Airport in Atlanta, Georgia, on Monday, November 19th, 2018.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What is Facial Recognition Technology?</h2>
      <p>
      Facial recognition technology, or otherwise commonly known as facial recognition systems, are computer-dependent security systems that can automatically detect and identify human faces. In simple terms, it is a way of recognizing a human face through technology. These machines rely on algorithms to do basic tasks such as identifying a person from a crowd. This technology uses facial features from photos and/or videos to better compare the information with a secured database of known faces to find a match.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How does Facial Recognition work?</h2>
      <p>
      From a human’s point-of-view, we know people by their faces and their respective facial features because after repeatedly seeing a person, it will automatically get stored into your brain. This is how facial recognition works in technology with the usage of algorithms and databases instead of the eyes and brain. According to a Georgetown University study, half of all American adults have their images stored in one or more facial recognition databases that law enforcement agencies can search and verify.
      </p>

      <p className="mt-4">
      Here is the process as to how this technology works:
      </p>

      <p className="mt-6">
        (Sources: Electronic Privacy Information Center (EPIC) and Norton Security)
      </p>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>A picture of one’s face is captured from a photo or video. It needs to be able to identify a human face and extract it from other people and the background (environment, buildings, cars, etc.).</li>
        <li>The system and its technology will then analyze and measure nodal points on the face, such as the distance between the eyes, distance from the forehead to the chin, the shape of the cheekbones, and many other key distinguishable features that separate you from other human faces. All of these examined facial features equate to a personal facial signature.</li>
        <li>Your facial signature is compared to a database of known faces. According to the Federal Bureau of Investigation’s (FBI) May 2018 report, the FBI has had access to 412 million facial images for searches.</li>
        <li>The system will then determine whether your face matches with a face in a database using nodal points/key facial features that distinguish you from the environment and other human beings.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">What Are Some Real-Life Applications of Facial Recognition Technology?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Social Media:</strong> Platforms like Facebook use an algorithm to spot faces when a person uploads a photo to their network. When they ask if you want to tag people in your photos, you are given the option to either tag or not tag anyone in this picture. If you say yes, it will create a link to their profiles. Facebook can recognize faces with a 98% accuracy.</li>
        <li><strong>Phone Manufacturers:</strong> Companies like Apple use facial recognition technology to unlock their phones. It started with the iPhone X/XS/XS Max/XR and it is now on higher generations including the iPhone 11, iPhone 11 Pro, and iPhone 11 Pro Max. Using this technology, it makes sure you’re the right person accessing the phone. According to Apple, the chance of unlocking your phone is about one in one million.</li>
        <li><strong>The United States Government (Department of Homeland Security/Transportation Security Administration):</strong> This technology can monitor people coming in and going out of airports. The Department of Homeland Security has used this technology to identify people who have overstayed their visas or under criminal investigation.</li>
        <li><strong>Retailers:</strong> Shops can now use surveillance cameras with this technology to scan the faces of every shopper. The primary goal is to fish out suspicious characters and potential shoplifters.</li>
        <li><strong>Businesses with Restricted Areas and Secured Entrances:</strong> Many companies have traded in security badges that granted them access into certain parts of the building for facial recognition systems. Instead of having to scan your card, you can walk up to the restricted area/secured entrance and it will open up after scanning your face and confirming it is an authorized person.</li>
        <li><strong>Marketers and Advertisers: </strong> Marketers use one’s gender, age, ethnicity, and many other traits when targeting groups for a product or an idea. With facial recognition, they will be able to figure out the pattern of audiences that attend conferences, concerts, campaign events, etc.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Successes of Facial Recognition Technology Usage</h2>
      <p>
        Within forty days, the United States Customs and Border Protection (CBP) officials along with the facial recognition
        technology at the Washington Dulles International Airport in Northern Virginia have caught three imposters.
      </p>

      <p className="mt-6 italic text-gray-500"><strong>August 22rd, 2018: Three Days After Facial Recognition Technology System Installation atWashington Dulles International Airport in Northern Virginia.</strong></p>
      <p className="mt-4">A 26-year-old man traveling from San Paulo, Brazil presented a French passport to the CBP officer conducting primary inspections. The officer utilized CBP’s new facial comparison biometric technology which confirmed the man was not a match to the passport he presented. The CBP officer referred the traveler to secondary inspection for a comprehensive examination. During this thorough check, CBP officers noted the traveler’s behavior changed and he became visibly nervous. A search revealed the man’s authentic Republic of Congo identification card concealed in his shoe.</p>

      <p className="mt-6 italic text-gray-500"><strong>September 8th, 2018: Second Imposter Within Three Weeks of Facial Recognition Technology System Installation at Washington Dulles International Airport in Northern Virginia.</strong></p>
      <p className="mt-4">A 26-year-old woman, who arrived on a flight from Accra, Ghana, presented a United States Passport to a CBP officer for admission as a returning citizen. Utilizing the new facial comparison technology, the CBP officer established that the traveler was not a match to the passport and referred her for further examination. A secondary examination confirmed that the traveler was a Ghanaian citizen and an imposter to the United States passport.</p>

      <p className="mt-6 italic text-gray-500"><strong>October 2nd, 2018: Third Imposter Within Two Months of Facial Recognition Technology System Installation at Washington Dulles International Airport in Northern Virginia.</strong></p>
      <p className="mt-4">A 26-year-old Cameroonian woman arrived on a flight from Accra, Ghana, which had originated from Johannesburg, South Africa. The women presented a United States Passport in the name of a 31-year-old United States citizen to the present CBP officer. The facial recognition technology used by the officer reported a mismatch to the photo in the passport. CBP officers confirmed her true identity during a secondary inspection and biometric examination. She was arrested for misuse of a passport (19 USC 1544).</p>


      {/* Continue formatting all the success stories and examples from your article here as <p> or <blockquote> */}

      <h2 className="text-2xl font-bold mt-10 mb-4">Why Should One Be Concerned About Their Privacy In Regards To Facial Recognition?</h2>
      <p>
      With some modern-day examples of facial recognition listed above, the respective owners of these tools and databases don’t obtain permission from a person to capture their facial details. One will not have control over their personal information and how it is used.
      </p>

      <p className="mt-4">Here are some examples of how your privacy could be violated:</p>
      <p className="mt-4">(Source: Norton Security)</p>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li><strong>Security:</strong> One’s facial data can be collected and stored, often without your permission. There is a possibility that hackers could access and steal that data.</li>
        <li><strong>Prevalence:</strong> Facial recognition technology has started to become more widespread amongst the entirety of the United States and possibly the world. This means that your facial signature could end up in a lot of places without your knowledge. There is little to no chance that a person would know who has access to their faceprint.</li>
        <li><strong>Ownership:</strong> Without any doubt, a person owns their face which is located above their neck. However, digital images are different. A person could have given up their right to ownership when you signed up on a social media network. A third-party could even track down images of you online and sell that data.</li>
        <li><strong>Safety:</strong> Facial recognition could lead to online harassment and stalking. The way it could potentially work is when someone takes a picture of you without your knowledge and uses facial recognition software to find out exactly who you are.</li>
        <li><strong>Mistaken Identity:</strong> Facial recognition systems may not be fully accurate. Check out the challenges part of the article to learn more about a real-life example.</li>
        <li><strong>Basic Freedoms:</strong>Government agencies and other authorized groups have the ability to track you in regards to what you do and where you go.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Failures of Facial Recognition Technology Usage</h2>
      <p>
      Facial recognition systems have been used by police forces for over two decades. Studies by Massachusetts Institute of Technology (MIT) and the National Institute of Standards and Technology (NIST) have found that the technology is more accurate on white men compared to the other demographics/races. This is most likely because of a lack of diversity in the images used to develop the established databases.
      </p>

      <p className="mt-4">Here is an example of a fault in facial recognition technology.</p>

      <p className="mt-4">On a Thursday afternoon in January, Robert Williams was in his office when he got a call from the Detroit Police Department telling him to come to the station to be arrested. Thinking that it was a prank, he ignored the entire conversation. An hour later, he pulled into his driveway in Farmington Hills, Michigan when a cop car pulled up behind him. Two officers got out and handcuffed Williams on his front lawn in front of his wife and two daughters.</p>

      <p className="mt-4">
      The police drove Mr. Williams to a detention center. He had his mugshot, fingerprints, and DNA taken. He was held overnight in jail. The next day, two detectives took him to an interrogation room. The interrogation happened in this format below.
      </p>

      <p className="mt-4">Detective 1: When was the last time you went to a Shinola store?</p>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
        <li>Shinola is an upscale boutique that sells watches, bicycles, and leather goods in Detroit, Michigan.</li>
      </ul>
      <p className="mt-4">Robert Williams: My wife and I checked it out when the store first opened in 2014.</p>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
        <li>One of the detectives then turned over the first piece of paper. It was a still image from a surveillance video that showed a heavily built man, dressed in black, and wearing a St. Louis Cardinals cap standing in front of a watch display. Five timepieces, in total worth $3,800.00, were shoplifted.</li>
      </ul>
      <p className="mt-4">One of the Detectives: Is this you?</p>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
        <li>The second piece of paper that was shown was a close-up. The photo was blurry, but it was distinctive enough to tell that it wasn’t Robert Williams.</li>
      </ul>
      <p className="mt-4">Robert Williams: No, this is not me. Do you think all black men look alike?</p>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
        <li>Robert Williams knew that he didn’t commit the crime. What he didn’t know was that his case is the first publically known account of an American being wrongfully accused and arrested based on a flawed match from a facial recognition algorithm.</li>
      </ul>

      <p className="mt-4">The charges against Robert Williams were dropped soon after they discovered it was a mistake made by the facial recognition technology itself.</p>
      <p className="mt-4">After this incident occurred, Amazon, Microsoft, and IBM announced that they would stop or pause their facial recognition offerings for law enforcement. The facial recognition technology used by police departments across the country is supplied by companies that aren’t known to many people. Companies include Cognitec, NEC, Vigilant Solutions, Rank One Computing, and Clearview AI.</p>



      <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>
      <p>
      Overall, facial recognition technology is extremely beneficial when it comes to matching a high-resolution picture to a database of faces. It shouldn’t be a primary source of evidence to accuse and arrest an individual because of the race boundaries and the fluctuation of accuracy levels between the demographics.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Citations</h2>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
        <li><a href="https://www.forbes.com/sites/thomasbrewster/..." target="_blank" className="underline hover:text-black">Brewster, Thomas. Forbes.</a></li>
        <li><a href="https://www.cbp.gov/newsroom/local-media-release/..." target="_blank" className="underline hover:text-black">CBP Newsroom.</a></li>
        {/* Add the rest of your citations here as list items */}
      </ul>
    </ArticleLayout>
  );
}
