import React from 'react'
import BlogLayout from "@/components/blog_layout"
import { Seo } from '@/components/seo'
import Share from '@/components/share'

export default function SocialMedia() {
    return (
        <BlogLayout>
            <Seo title="Social Media. It's Complicated | Ishan Write's"></Seo>
            <main>
                <div className="title">
                    <h1 className="title">Social Media. It's Complicated</h1>
                    <h1 className="title">Part 1</h1>
                    <p><a href="https://noobscience.rocks">Ishan</a> at 2023-03-14 02:22PM UST</p>
                </div>
                <div className='center'>
                    <Share title="Social Media. It's Complicated Part 1" url="social-media-1"></Share>
                    <div className="audio">
                        <audio id="audio" src="/assets/blog/audio/social-media-1.ogg" controls></audio>
                        <br />
                            <small>Voiced by me: Ishan Joshi</small>
                    </div>
                </div>
                <div className="img">
                    <video src="/assets/blog/videos/social_media.mp4" autoPlay muted loop></video>
                </div>
                <div className="bod">
                    <p><span className="first">Y</span>es. I know. Social media is a blogger&#39;s favorite topic to talk about. It is a topic that so needed to be talked
                        about, but so cliched, that most people are like <em>eh it&#39;s a choice afterall</em>.</p>
                    <p>But what happens when it no longer is a choice. What happens when social media is shoved down our throats. Is there
                        anything we can do about it then. First off, I have a lot of thoughts and I do not know how to format this
                        correctly. So I might go wildly off topic sometimes. So forgive me. With that out of the way, grab a snack, start
                        reading or just hit that audio button at the top to listen to me talk.</p>
                    <h2 id="the-problem">The Problem</h2>
                    <p>I won&#39;t be talking much about the problems with social media. It is a widely discussed topic with many key
                        individuals both in the field of psychology and tech have spoken about. There is even a <a
                            href="https://www.netflix.com/watch/81254224?source=35">Netflix Documentary</a> about this topic (It is quite
                        good. A must watch).</p>
                    <p>Now, the problems of social media have always been traditionally blamed on the user. Arguments like: <em>Who asked
                        you to use it?</em>, <em>It&#39;s a choice</em>, <em>You can always quit</em>; have always been told to social
                        media users and it is up to us to evaluate: Is that even true anymore? Are we really in control? Are we controlling
                        the apps on our phone or are they controlling us?. </p>
                    <h3 id="the-signup">The SignUp</h3>
                    <p>I recently stumbled across a conversation on reddit, where people were discussing about the time they required to
                        sign up for a social media service <em>vs</em> the time it took for them to delete an account. And the results were
                        not very pretty.</p>
                    <p>Now believe me I understand why this is done. Hell, once you sign up to even Team Viewer, it is nearly impossible to
                        get off the service. Signing Up for Instagram takes an average of 15 seconds on a stable internet connection.
                        Whereas deleting the account, takes nearly 1 whole minute. There is complex website design, you have to sign in to
                        an old UI and the text is very misleading. I mean, there is no delete account button. I need to search it everytime.
                        That&#39;s just ridiculous.</p>
                </div>
                <div className="bod">
                    <h2 id="age-and-algorithms">Age and Algorithms</h2>
                    <p>By a research conducted by [1]<a
                        href="https://www.statista.com/statistics/1337525/us-distribution-leading-social-media-platforms-by-age-group">Statista</a>
                        found that a majority of Instagram users were aged 14-29. Now, this might seem like a huge age gap and it is, but
                        some elements of them both are same. I mean it is no secret that most social media apps like to put their users into
                        a <em>bubble</em> of self approval [2]. So a weird sense, the app is validating what you might be thinking. So
                        let&#39;s say you look at too many videos that are about how a bill is bad. Now there might be opposing views there
                        that might even make sense. But the probability of you getting bored or annoyed of the opposing opinion is greater
                        than just sticking to your thinking. These apps are not providing you with the truth. Your search engine, your video
                        content provider is not showing you the truth. They are showing you what you <em>want to hear</em>.</p>
                    <p>Ever felt shocked when your social media app seems to eerily show the exact content you were thinking of? No there
                        are no cameras in your house. It is the <em>patterns</em> that a good algorithm feeds off of. For example, you might
                        feel like looking at models 6pm - 7pm or look at food bloggers before you eat at 8pm. This helps them show accurate
                        ads to cater to your needs. This is very similar to how apps like Swiggy seem to send us the right message at the
                        right time. Now imagine these same patterns being used at a more malicious scale. Imagine a political campaign
                        targeting you exactly at a time you are statically more probable to be feeling down or upset. </p>
                    <p>How the algorithm gauges this? Well, just look at your browsing habits when you are with different emotions. You
                        might not notice yourself lingering a little over a particular video. Maybe that video is something that is known to
                        be more appealing to other people who were gauge to be in sorrow. So you are put in this category. At any given
                        time, there are multiple categories we are begin put in without our own knowledge [3].</p>
                    <h2 id="everything-is-stored">Everything is stored</h2>
                    <p>Oh, an innocent query or stalking an Instagram account once won&#39;t do <em>anything</em> right? Well, you might
                        actually be surprised.
                        Social Media Apps store <strong>EVERYTHING</strong>. There are no mistakes. You can&#39;t per chance watch something
                        you don&#39;t want to. That&#39;s why it&#39;s always advised by many privacy experts to always compartmentalize
                        your digital presence. So your work history <em>must be different</em> from your personal history.</p>
                    <p>Personal Experience, when I was still using Instagram, after I had gotten rid of the crappy feed after I had opened
                        an account, I had specifically tailored my feed to only show tech related stuff and friends show as I was a big fan
                        of it back then. Now, after Friends (2004) I started to watch a new show on Netflix, I guess it was Vampire Diaries
                        (2007) or something like that. And after a few days of watching it on Netflix, I was bombarded with posts about the
                        show, it&#39;s actors, I suddenly got reels about it and as I was watching the show, I used to click on them and
                        <em>engage</em>. I still got it&#39;s recommendations till the last moment, till I stopped using Instagram [4].</p>
                    <p>Now, not to sound all conspiracy like, this actually makes sense and it is present in their <a href="">privacy
                        policy</a>. This is part of their tailored experience. Look before I offend people, I know that many people like
                        this part about Instagram and I am not just showing down this service. I am just giving my opinion. If you think
                        different, please start a conversation over at <a href="https://twitter.com/noobscience1">twitter.com</a>. </p>
                    <p>You know sometimes I wish I had a way to delete my social media history. I know we all do. And not just search
                        queries. I mean everything. Although I think Instagram does offer this, I don&#39;t trust it enough to completely
                        give me a fresh slate. Now, before you ask me <em>what do you have to hide?</em>; I have <em>nothing</em> to hide. I
                        just don&#39;t want my personal preferences that has been gauged by an algorithm for about 60% of my phone screen
                        time, in the hands for a company whose business model relies on profiting off this data.</p>
                </div>
                <div className="bod">
                    <h2 id="you-dont-control-your-data">You don&#39;t Control your data.</h2>
                    <p>I am sure I am quoting off someone else here; but in the 21<sup>st</sup> century, data is the new oil.
                        There is a reason that the silicon valley giants are worth <em>Trillions</em> in assets. It is because even in the
                        modern age, especially in the modern age, information is <strong>POWER</strong> and those who control the flow of
                        information, control the world.</p>
                    <p>I am sure you might have heard about the <a
                        href="https://en.wikipedia.org/wiki/Facebook%E2%80%93Cambridge_Analytica_data_scandal">Facebook–Cambridge
                        Analytica Scandal</a>. The infamous scandal of the 2010&#39;s opened our eyes to the dangers of giving data in
                        the wrong hands. Where a series of questions were used to build psychological profiles on people and was used for
                        political benefit [5].</p>
                    <p>And the worst part of it all? The scam went public several years later, after a whistle blower exposed the involved
                        parties. So, they would have actually gotten away with it and we wouldn&#39;t have had a single clue.
                        We have absolutely no control over our own data. Now before you start with the <em>I have nothing to hide</em>,
                        imagine, just imagine your worst secrets get leaked to someone you despise, maybe a stalker or an old jealous
                        friend. Stuff like what actresses you like, what weird stuff you watch on the internet, who do you follow, what
                        types of posts you are most interested in? Would you be okay with that? Well, I hope the answer was NO. So why
                        should it be different for companies? Now there is obviously no guy sitting at his desk eating chicken wings looking
                        at your history and calling his friend like &quot;bruh check this&quot;. But, atleast there is a chance, and if you
                        are willing to take it; well that&#39;s your choice.</p>
                    <p>Now, I might sound condescending in these arguments, but that&#39;s just how I feel. I have actively been trying to
                        avoid social media for a while now and only recently was able to stay away from Instagram and Reddit for 2 months
                        without relapsing. Now I do use twitter, but that&#39;s mainly professional and I don&#39;t give out much info to it
                        anyways. Well atleast I think I do. Now you see this is the problem. No matter how hard you try, you never would
                        know. You would never know if your personality online shall remain private. <em>Wait</em>. Did I just say
                        <strong>Personality</strong>? Yes I did. </p>
                </div>
                <div className="bod">
                    <h2 id="what-they-actually-store">What they actually store</h2>
                    <p>Now I have no way of knowing what and what they don&#39;t store about you. I would usually give you citations to
                        privacy policies but, that&#39;s your homework. And if you do find any violations or errors in these references to
                        the privacy policies of these social media companies (Facebook, Instagram, Twitter, Snapchat, etc), please reach out
                        to me out on <a href="https://twitter.com/noobscience1">twitter.com</a> or just edit this page over on <a
                            href="">github.com</a>.</p>
                    <p>Now with that out of the way, most privacy policies of these social media companies are quite vague and from what I
                        understand (Not a lawyer BTW), they collect almost everything they can. I know big surprise. A company that can only
                        sustain and make profits if they accurately show me ads, collects everything it can about me? What a bummer.</p>
                    <p>As of 14<sup>th</sup> of March 2023, the day I am writing this article, Google and Facebook have been issued orders
                        to hand over the data of people it thinks are more likely to get an abortion. Now I am in no place to comment about
                        this. So I won&#39;t even be including the source. But just think about this the next time you input that search
                        query or follow that group on Facebook. Are you really safe? Not you physically, but is your personality safe?</p>
                    <p>You might be thinking, what is all of this tracking even for? The end goal I believe is to collect not your
                        information, but your personality. To collect what makes you, well, YOU. The end goal is to have a data set so
                        diverse that a well programmed algorithm can predict what you might think before you do. An algorithm that
                        understands you better that you do yourself. An algorithm that through the help of third party integrations like a
                        smart watch, can determine your health patterns before your doctor. Something that can predict exactly when you are
                        vulnerable, exactly when you are going to fall ill and exactly when to show you that perfectly placed ad that just
                        clicks. </p>
                    <p>So next time you imagine data, don&#39;t imagine an array of information but an array on information that can be
                        complied into a personality. A mind model about you. A copy of your mind with admin privileges in the hands of a
                        profit driven private company.</p>
                    <p>Now the end goal of this is to not make you lose your sleep. It is to educate you about the dangers of mishandling
                        your data. Obviously some of this exaggerated and unsourced. But do you really want to take the leap of faith for a
                        private company?</p>
                </div>
                <div className="bod">
                    <h2 id="the-notifications">The Notifications</h2>
                    <p>Now, just a random question that I am sure some guy on TedX asked a million times already, what is the first thing
                        you do after you get up in the morning? For most of us, we see our phones even before the light of the sun hits our
                        eyes. Now before you go berserk on me; I am with you guys and I am trying to improve myself. My screen time runs in
                        double digits and even as I write this article, it is 2am in the night. So I am not exactly perfect. </p>
                    <p>Now back to the topic, what is it that you check first on your phone? Your notifications. <em>Oh 5 mentions</em>,
                        <em>20 Snaps</em>, <em>2 replies</em>, <em>Someone commented on my story</em>. Congrats. You are getting up to a
                        solid kick of dopamine. Actually, change that. You don&#39;t get up. Not for another 30 minutes till you are done
                        checking all your notifications and scrolling through your socials. You feel lazy now. <em>Oh, 1 hour already?</em>
                        <em>Do I really have to go to school?</em>. We have all been there at some point of our lives.</p>
                    <p>Notifications were really driving me crazy. I would get them at the most random times, but eerily, I always clicked
                        on them. They were always perfectly timed. Guess why. I was online 24x7. That was not good for my mental health at
                        all. The notifications were the reason I opened up my socials half the time. I tried disabling the notifications,
                        but it only made it worse to the point where I had the habit of opening the app to check what&#39;s new and just
                        fall into it for a hour. Time just used to <em>vanish</em>.</p>
                    <h2 id="why-i-quit">Why I quit.</h2>
                    <p>I quit Instagram when one day, I came back from my college and opened Instagram laying on my bed. My shoes were still
                        on, I was in my sweaty clothes, yet I was hooked. I only got up at 8pm. Nearly 4 hours are continuous scrolling and
                        I still wasn&#39;t satisfied. I wanted more. I felt sick. I decided this was not how I was going to spend my time. I
                        just wasted <strong>4 Hours</strong> watching people dancing to music for not more than a minute. For context,
                        TikTok is banned [6] in my country, so Instagram Reels are alternative to it here.</p>
                    <p>And quiting Instagram was the best desicion I made</p>
                    <p>
                        Stay tuned for Part 2
                    </p>
                    <p>
                        The above article is a part of a series of articles on the dangers of social media. You can follow the series on
                        <a href="https://blog.noobscience.rocks">hashnode</a>. Or get it first here on my personal website.
                    </p>
                </div>
                <div className="bod">
                    <h2>Citations</h2>
                    <ol>
                        <li>
                            <cite>Chen, G.M. &amp; Starosta, W.J. (2020). &quot;Social media use and its relationship to personality
                                traits,&quot; Journal of Broadcasting &amp; Electronic Media, 64(2), 339-357. doi:
                                10.1080/08838151.2020.1751053</cite>
                        </li>
                        <li>
                            <cite>Nguyen, H. (2019). &quot;What Social Media Algorithms Know About You,&quot;<a href="https://www.nytimes.com/2019/02/19/business/media/social-media-algorithms.html">The New York Times</a>.
                            </cite>
                        </li>
                        <li>
                            <cite>Pariser, E. (2011). &quot;The Filter Bubble: What the Internet is Hiding From You,&quot; Penguin
                                Press.</cite>
                        </li>
                        <li>
                            <cite>Ishan Joshi (2022) <a href="">&quot;Oh Dear Instagram&quot;</a>, Hashnode.</cite>
                        </li>
                        <li>
                            Meredith, Sam (April 10, 2018). "Facebook-Cambridge Analytica: A timeline of the data hijacking scandal". <a href="https://www.cnbc.com/2018/04/10/facebook-cambridge-analytica-a-timeline-of-the-data-hijacking-scandal.html">CNBC</a>.
                        </li>
                    </ol>
                </div>
            </main>
        </BlogLayout>
  )
}
