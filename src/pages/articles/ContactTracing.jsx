import ArticleLayout from '../../components/ArticleLayout';

export default function ContactTracing() {
  return (
    <ArticleLayout title="What is Contact Tracing and How Does it Work?" date="May 24, 2020">
      <p>
        Contact tracing is a practice that takes place usually during major virus outbreaks. Learn more about what it is and how it is implemented during the current pandemic.
      </p>

      <img
      src="/ContactTracing1.webp" // Adjust the path if needed
      alt="Contact Tracing Illustration"
      className="w-full max-w-3xl mx-auto rounded-lg shadow-md mb-6 mt-4"
/>

      <p className="text-center mt-6 italic text-gray-500">Contact Tracing Image — Science Focus</p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What is Contact Tracing?</h2>
      <p>
        Contact tracing is the act or practice of supporting current cases (a technical term for patients) who have been tested positive for COVID-19 and warning potential people who may have been in contact with a case who tested positive for the novel coronavirus. In simpler terms, it is nothing but a way of tracing all the people who have been in contact with a person who has been tested positive for the coronavirus. You could think of it as the public health equivalent of detective work. With the use of this proven health tool, it will aid in stopping chains of virus transmission between one person and another, control the number of cases present in a region, county/district, city, state, and to better prevent future waves and/or surges of waves.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The Paths for Tracing Potential Cases</h2>
      <p>There are two ways as to how this can work:</p>

      <p className="mt-4 font-semibold">The Simple Path</p>
      <p>
        For example, say a hairstylist gets COVID-19. In most cases, the salon keeps a record of all their clients and their appointments that they have had while that stylist was working. The salon can give that list to a contact tracer who will then contact everyone that visited the salon and ask them to monitor their symptoms for the next 14 days (2 weeks). If they had close contact with the affected stylist for a prolonged time period, they may be told to isolate and self-quarantine.
      </p>

      <p className="mt-4 font-semibold">The Complicated Path</p>
      <p>
        Not all instances are as straightforward as the previous example. Typically, people don’t keep detailed logs as to who they have been around and it may be hard to recall due to a health condition or just sheer forgetfulness. Even if you posted something on social media the day before, there are still high chances you would have forgotten a few people you had contact with on that day. If you go to the grocery store, you will be walking by a lot of people and will have close contact with one another in many circumstances. A contact tracer will not have the power to reach those unknown people at all.
      </p>

      <p>
        There may be a situation in which the person has all the details in which the public health workers will need to proceed. Though, some people refuse to provide contact tracers with the respective information. To add on, a selective set of people will choose to ignore the professional recommendations that are suggested to protect the safety of themselves and others.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to Solve the Discrepancies being faced by Contact Tracers?</h2>
      <p>
        Thanks to technological developments in our society, countries all over the world have been able to develop an app respective to their respective country. For example, in South Korea and Singapore, there are smartphone apps that track who comes closer to each other through the determination of Bluetooth or GPS location. If one of those people gets diagnosed with COVID-19, the others who were in close proximity of the person automatically get a message alerting them. Other countries like Germany are currently developing similar apps with more privacy protections. According to researchers from Oxford University’s Big Data Institute, the apps should be voluntary and would need to be downloaded by at least 60% of the population to achieve “digital herd immunity” which is needed to suppress COVID-19. Recently, Apple and Google came together to build internal software into their respective operating systems and released it on May 20th, 2020. Due to the huge user privacy concern regarding the tracking technology, Marc Zissman, an engineer at Massachusetts Institute of Technology, is co-leading “Private Automated Contact Tracing (PACT).”It is a protocol that aims to set the privacy standard for contact tracing apps. The PACT team served an advisory role during the process of the creation and development of the software Apple and Google integrated into their phones.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How do These Contact Tracing Apps Work?</h2>
      <p>
        When someone downloads the app, short-range Bluetooth signals known as “chirps” are emitted from their smartphone and picked up by other phones within the area also running the same app. If a person with the app tests positive, they can upload their chirps from recent weeks to a public database. Others with the app would then be notified when their phones picked up infected individuals’ chirps, alerting them that they may have been exposed. Once public health officials outline and retrace the infected person’s steps, they will contact potentially infected people with information regarding an appropriate course of action, which could include symptom checks, seeking testing, or evens self-quarantining.
      </p>

      <p className="mt-4">
        Other countries are taking a streamlined approach to their apps in terms of their data collection. In the United States, they feel that by making a public database of chirps emitted from various smartphones, it is corresponding with the “P” in PACT, which stands for private. According to Ian Levy, the technical director of the United Kingdom’s National Cyber Security Centre, The U.K.’s contact tracing app stores citizens’ health information in a National Health Service database. Singapore’s TraceTogether app, Hong Kong’s StayHomeSafe app, and Australia’s COVIDSafe app follow this approach of a government-maintained database.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>
      <p>
        Contact tracing is a way of tracing all the people who have been in contact with an individual who has been tested positive for the coronavirus. There are various scenarios as to how infected patients tested positive for COVID-19. It could be as simple as getting it from your hairstylist. It could also be as complicated as you went to the grocery store, pharmacy, and a gas station on the same day and you have been infected from someone else without a person knowing who they had specific contact with. Regardless of the complicated situations, governments across the world are developing tools and apps with help from universities or third-party companies to fill the discrepancies. Bluetooth technology plays a major role in identifying a person who may have the potential to be infected with the novel coronavirus. Follow your local, state, and national government rules regarding this pandemic and make sure to stay safe!
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-2">Citations</h2>
      <ul className="list-disc ml-5 space-y-2 text-sm text-gray-600">
        <li>Albergotti, Reed. “Apple and Google Launch Coronavirus Exposure Software.” The Washington Post, WP Company, 20 May 2020, www.washingtonpost.com/technology/2020/05/20/apple-google-api-launch/.</li>
        <li>“Case Investigation and Contact Tracing: Part of a Multipronged Approach to Fight the COVID-19 Pandemic.” Centers for Disease Control and Prevention, Centers for Disease Control and Prevention, 29 Apr. 2020, www.cdc.gov/coronavirus/2019-ncov/php/principles-contact-tracing.html#:~:text=Contact%20tracing%20is%20part%20of,stop%20chains%20of%20transmission.</li>
        <li>D’Agostino, Susan. “How Will COVID-19 Contact Tracing Apps Work in the U.S.?” Discover Magazine, Discover Magazine, 21 May 2020, www.discovermagazine.com/health/how-will-covid-19-contact-tracing-apps-work-in-the-u-s.</li>
        <li>Rigby, Sara. “Download the COVID-19 Contact-Tracing App and Save Lives, Urges Health Secretary.” BBC Science Focus Magazine, 5 May 2020, www.sciencefocus.com/news/download-the-covid-19-contact-tracing-app-and-save-lives-urges-health-secretary/.</li>
        <li>Seeker, director. What Exactly Is Contact Tracing. YouTube, 1 May 2020, www.youtube.com/watch?v=j-XHd9yzigM.</li>
        <li>Texas Department of State Health Services. “Contact Tracing.” Texas Department of State Health Services, www.dshs.state.tx.us/coronavirus/tracing.aspx.</li>
        <li>“What Is ‘Contact Tracing’ and How Does It Work?” WebMD, WebMD, 4 May 2020, www.webmd.com/lung/news/20200504/what-is-contact-tracing-and-how-does-it-work#.</li>
      </ul>
    </ArticleLayout>
  );
}