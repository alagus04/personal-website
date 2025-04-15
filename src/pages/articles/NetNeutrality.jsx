import ArticleLayout from "../../components/ArticleLayout";

export default function NetNeutrality() {
  return (
    <ArticleLayout
      title="Net Neutrality: Why It’s More Important Now Than Ever?"
      date="August 20, 2020"
    >

<img
        src="/NetNeutrality.webp"
        alt="Facial recognition technology at Delta gate"
        className="rounded-lg shadow-lg mb-4"
      />

      <p>
        Are you getting faster internet at a public library instead of your own house equipped with a 1-gigabyte internet plan? Do you feel a speed increase/decrease on some streaming services after switching internet service providers? There is a good chance the reason behind this is Net Neutrality.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What is Net Neutrality?</h2>
      <p>
        According to Investopedia, Net Neutrality is “the concept that all data on the internet should be treated equally by corporations, such as internet service providers, and governments, regardless of content, user, platform, application or device.” This concept requires all Internet service providers (ISPs) to provide the same level of data access and speed to all traffic. They shouldn’t be able to block or degrade traffic to a specific website.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The History of Net Neutrality</h2>
      <p>
        Around 2002–2003, the term “network neutrality” was introduced as a concept in response to the efforts by the Federal Communications Commission (FCC).
      </p>
      <p className="mt-4">
        Thanks to Wired and their “Net Neutrality Timeline,” this section of the story is possible.
      </p>
      <p className="mt-4">
        From the early 2000s, ISPs banned some customers from using virtual private networks (VPNs) or setting up their WiFi routers. This was the inspiration that formulated the net neutrality movement. In 2005, the FCC fined North Carolina’s service provider Madison River and orders it to stop blocking phone calls over the internet. This marked one of the first efforts to enforce net neutrality rules. In 2008, the FCC ordered Comcast to stop throttling BitTorrent connections on its network. BitTorrent is a communication protocol for peer-to-peer file sharing which is used to distribute data and electronic files over the Internet. Comcast denies any allegation of throttling and proceeds to sue the FCC. Comcast successfully argued that it could slow down connections if it wanted to. In 2009, Apple was caught blocking iPhone users from making Skype calls at the request of AT&T. The companies eventually repeal the block under the pressure from the FCC. In 2015, the FCC passed the net neutrality order which prevented ISPs from blocking, prioritizing, and/or throttling their internet traffic. In 2017, the FCC votes to repeal its previous order, which allowed ISPs to block or throttle content whenever they feel the need to do so.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Why is Net Neutrality Important Now Than Ever?</h2>
      <p>
        With the repeal of the net neutrality rules, ISPs have the option of prioritizing their content and services over those of rivals. There is still a fear that startups will not have the same opportunities to grow if ISPs can pick and choose companies to favor in what is called “paid prioritization.” An example from Money states that Time Warner, an investor in Hulu, could theoretically strike a deal for streaming services. This means that Hulu would have to pay a fee to prioritize its content over other streaming platforms. If this were to happen, Time Warner could potentially “block” or even “throttle” Netflix if they decline to pay Time Warner a fee. This will then slow down services for Netflix users and prioritize high-speed connections to Hulu users.
      </p>
      <p className="mt-4">
        Because of the removal of net neutrality rules and policies by the FCC, ISPs have full control over what content can be shown to subscribers. Most importantly, companies like Comcast, AT&T, Spectrum, etc. could charge more for “internet packages” the same way they charge different prices for cable TV packages. People who are barely making their payments could suffer. We will not notice the changes very rapidly, it will happen in small batches without our knowledge. With the work from home and virtual learning orders put into place, access to high-speed internet connections is a must. According to the FCC, 21 million Americans don’t have access to high-speed internet. A private study conducted by Microsoft found something shockingly different compared to the FCC data. They found that the number of people that don’t have access to high-speed internet could be as high as 163 million people. As mentioned several times by various senators across our country, the maps that the FCC provides are inaccurate, phony, and bogus. With the individuals that have an internet connection, ISPs have all the power to throttle internet connection speeds based on one’s location and their “internet package” tier level. During a crisis like this COVID-19 pandemic, it is an essential/basic need to have an internet connection to allow adults to work from home and students to attend school/university remotely. Net neutrality consists of rights that are equivalent to our First Amendment, and we should all be fighting for internet equality. Just like how everyone has equal access to food, water, shelter, job opportunities, resources, etc., internet equality should be something that everyone has equal access to. If one person gets high-speed internet in a wealthy community, another person with the same rights should be able to get high-speed internet in a low-income community.
      </p>

      <p className="mt-4">
        Stand with me, and let’s fight to bring back net neutrality policies by getting involved with the Free Press, Save the Internet, and Fight for the Future organizations.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Citations</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          Fight for the Future. “ Fight for the Future Net Neutrality.” Wikimedia Commons, Wikimedia Commons, 4 Jan. 2018, commons.wikimedia.org/wiki/File:Day_of_Action_to_Save_Net_Neutrality_03.jpg.
        </li>
        <li>
          Finley, Klint. “A Brief History of Net Neutrality.” Wired, Conde Nast, 9 May 2018, www.wired.com/amp-stories/net-neutrality-timeline/.
        </li>
        <li>
          Kenton, Will. “Net Neutrality.” Investopedia, Investopedia, 29 Jan. 2020, www.investopedia.com/terms/n/net-neutrality.asp#:~:text=What%20Is%20Net%20Neutrality%3F,%2C%20platform%2C%20application%20or%20device.
        </li>
        <li>
          “Net Neutrality Is Officially Dead. Here’s How the Changes Could Affect You, According to Experts.” Money, money.com/what-does-the-end-of-net-neutrality-mean-for-me/.
        </li>
      </ul>
    </ArticleLayout>
  );
}
