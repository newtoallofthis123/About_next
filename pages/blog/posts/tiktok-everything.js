import BlogLayout from '@/components/blog_layout'
import React from 'react'
import Share from '@/components/share'
import { Seo } from '@/components/seo'

export default function TickTock() {
    const [tldr, setTldr] = React.useState(false)
    const toggleTldr = () => {
        setTldr(!tldr)
    }
    return (
        <BlogLayout>
            <Seo title="The TikTokification of Everything"></Seo>
            <main>
                <div className="title">
                    <h1>The Tik Tokification</h1>
                    <h1>Of Everything</h1>
                    <p><a href="https://noobscience.rocks">Ishan</a> at 2023-03-19 22:58 PM IST</p>
                </div>
                <div className="center">
                    <Share title="The TikTokification of Everything" url="tiktok-everything"></Share>
                    <div className="audio">
                        <audio src="/assets/blog/audio/tiktok_everything.mp3" controls></audio>
                        <p></p>
                        <small>Audio content generated by <a href="https://hashnode.com">hashnode</a></small>
                    </div>
                </div>
                <div className="img">
                    <video src="/assets/blog/videos/tiktok_everything.mp4" disablePictureInPicture autoPlay muted></video>
                </div>
                <div className="bod tldr">
                    <h2 onClick={toggleTldr}>
                        <span><i className="bi bi-postcard"></i> See the TL;DR</span>
                    </h2>
                    <div style={
                        (tldr) ? { display: "block" } : { display: "none" }
                    } className="tldr_content">
                        <h2 class="atx" id="tldr">TLDR</h2>
                        <p>TL;DR: TikTok has taken the world by storm, capturing the attention of millions with its unique combination of short, visually appealing content and advanced AI algorithms designed to keep users engaged. The platform's success is due in part to its well-crafted design that fosters community building, as well as its recommendations algorithm, which is one of the most advanced in the world. However, there are concerns about data privacy, as TikTok collects and monitors user data, and is legally bound to hand over all of its data to the Chinese government.</p>
                        <p>Other social media platforms have taken notice of TikTok's success and have introduced similar features to replicate its popularity. For example, Instagram and YouTube have both introduced short-form content options to their platforms, with Instagram's Reels and YouTube's Shorts. While these features are addictive and keep users engaged, they also raise concerns about data privacy.</p>
                        <p>As users, it's important to be aware of the data we're sharing and the algorithms tracking our behavior. Short-form content is here to stay, but we must be conscious of the trade-off between entertainment and privacy.</p>
                    </div>
                </div>
                <div className="bod">
                    <h2 class="atx" id="introduction">Introduction</h2>
                    <p>Hi! in this “opinions” blog post, I’ll explore the impact of TikTok on the visual medium and how it has changed the way we consume and create content. We'll take a look at the power of visuals and how they correspond well with auditory sensations. I'll delve into TikTok's design, algorithm, and community-building features while acknowledging the concerns raised about data misuse and privacy violations. Additionally, we'll discuss the emergence of TikTok-like functionality in other popular services such as Instagram and YouTube Shorts. Finally, I'll share my personal experience with Spotify's TikTok for Music-like feature and suggest that short content is everywhere and difficult to escape. So sit back, relax, and let's get started!</p>
                    <h2 class="atx" id="the-visual-medium">The Visual Medium</h2>
                    <p>Now I have no problem with TikTok like content as a concept. I actually respect the people behind the concept of it. I mean it is so genius. You get short bursts of information, that are easy to digest, easy to produce and very easy to market. I mean, YouTube surprised people when it rose up to be more than just a video hosting service. YouTube became well, YouTube, a place where people, regardless of their age, gender or nationality* were allowed to share their thoughts, build communities and ultimately, a livelihood. How YouTube became so popular? Well, they combined the power of understanding using visuals with the power of a algorithm that correctly gauges these videos and recommends it to users. Now there are down sides to this as well, but for the most part, YouTube was perfect.</p>
                    <p>I mean, I come from India, where the advent of Jio Technologies and Sim Cards have enable the most rural parts to have access to the internet. And most people use YouTube for their queries. They know about Google, trust me, the company has made sure that they do. But they prefer to use YouTube for searches. This shows the power of algorithms combined with the visual medium.</p>
                    <p>We as people correspond well to visuals and auditory sensations, compared to text. There is a reason why you’ll see the most newspapers having their own podcasts or including videos in their articles for better understanding. Visuals just work. You don’t need knowledge in the topic, you don’t even need to understand the language.</p>
                    <p>So with visuals having this much power over us, combine that with AI and some effective psychology, you got yourself quite an explosive combo haven’t you?</p>
                    <h2 class="atx" id="enter-tiktok">Enter TikTok</h2>
                    <p>TikTok was not an indigenous idea. I mean, it’s founding idea was rather murky. When TikTok was founded by the Chinese company Byte Dance and was first released to the Chinese public in September of 2016 under the name “Douyin”, the video sharing app. It was marketed as the alternative to banned social media sites such as Facebook and Instagram in China. It was a massive hit with the Chinese public. It’s rose further by acquiring <a href="http://Musical.ly">Musical.ly</a>, which was popular in the US. Ever since then, TikTok has 2billion downloads and is regarded as one the fastest growing social media networks in the world.</p>
                    <blockquote>
                        <p>Origins of TikTok- Generated by Bing AI</p>
                    </blockquote>
                    <p>Remember, here that the idea of a lip syncing app was not new at this time. There were apps like Dumsmash and <a href="http://Musical.ly">Musical.ly</a> for that matter which were wildly popular in that niche. And this is where TikTok started to slowly but surely take over. It started to relax copyright laws by attribution, deals and creator support and started including more up-to-date, better quality music, introduced mesh powered filters to compete with apps like snapchat. The journey of TikTok going from a lip syncing app to a full blown social media is a whole ordeal or copying, unique brilliance and in some cases, support from the Chinese government. It is actually quite facinating and I recommend you check out some of the articles I will be linking below which I used for research.</p>
                    <p>Now TikTok had something unique. Moreover, it had also garnered a loyal fan base, with many TikTok creators, terming themselves influencers and having massive fanbases themselves, further boosting TikTok’s viewership and for a while, everything seemed “A Okay”. It is only later that it’s effects would be visible to a scale as today, where TikTok is a widely talked about subject and many good articles being written on the topic. But first, let’s discuss TikTok’s design</p>
                    <h2 class="atx" id="the-design">The Design</h2>
                    <p>I love a well designed product and I have to swallow a bitter pill and admit, TikTok is a damn well designed product. As TikTok was banned in India, I am not aware of it’s design changes since 2019 except ones big enough to reach the news, so take this part with a grain of salt.</p>
                    <p>First up, the logo. A logo says a lot about a company and TikTok’s logo is wacky, creative and futuristic. At least I interpret it that way. The logo encourages the user to be creative and finally post a video on TikTok, going from a TikTok user, to a TikTok creator and advocate. This can also be hinted by the placement of the create button being at the center of the navigation bar, the gold spot for any button to be; highlighting the significance of you making content on TikTok.</p>
                    <p>The user interface is also very user-friendly, with a bottom navigation bar that makes it easy to switch between different sections of the app. The app's algorithm is also very effective, serving up videos that are tailored to the user's interests and preferences. This keeps users engaged and coming back for more.</p>
                    <p>TikTok's community-building features are definitely one of its strongest assets. Users can easily connect with others who share similar interests through the use of hashtags and challenges. This creates a sense of camaraderie and makes the app more engaging for users.</p>
                    <p>The duet feature is another example of how TikTok is fostering community among its users. This allows users to record videos in collaboration with others, creating a sense of teamwork and fun.</p>
                    <p>One more interesting thing pointed out my many notable researchers is the fact that TikTok did something unique with the way they play videos. Normally, on the web, we are only used to being stimulated horizontally or in other words, a horizontal scroll. But TikTok not only has an addictive horizontal scroll, powered by what is believed to be the world’s most complex recommendation algorithm, it also has a vertical scroll, in the sense that the video’s we like, the video loops itself repeatedly until the person is satisfied.</p>
                    <p>So what this effectively sets up is a very effective way of keeping the person hooked and well, driving him into the most efficient addictive system in the world; the feedback loop. The more you scroll horizontally, the better chance you have of getting something you like and the more you scroll vertically, watching the video repeatedly till your dopamine receptors are completely satisfied.</p>
                    <h2 class="atx" id="the-algorithm">The Algorithm</h2>
                    <p>It is no understatement that the TikTok algorithm is one of the most complex and advanced under recommendation system in the world. Now I want you to imagine the amount of data this complex of an algorithm requires to function. Hence to do so, everything you do on TikTok is heavily monitored. Everything from how much time you watched a video or where all did you linger. Your interests, your face and even your audio is all collected by TikTok for processing.</p>
                    <p>Setting aside the fact the TikTok is owned by the Chinese government and is legally bound to hand over all of it’s data to the Chinese government. There have been concerns raised about the potential for data misuse and privacy violations.</p>
                    <p>Now, the one major problem I have with the TikTok algorithm that I even glossed over in my article series about <a href="https://noobscience.rocks/blog/articles/social-media-1">social media</a>, is that the algorithm is so unforgiving. So let’s say, I do an innocent search about some topic. Just for research or curiosity, that too is filtered into the Algorithm. Everything is recorded. And the TikTok Algorithm tries to gauge everything I do.</p>
                    <p>It’s a privacy nightmare in my opinion.</p>
                    <h2 class="atx" id="so-what">So what?</h2>
                    <p>Now that I have discussed all these wide range of topics about TikTok, let me tie everything together. The following is a list of popular services that have, in some form or the other, introduced TikTok like functionality into their own, platforms.</p>
                    <ul>
                        <li>Meta: Meta offers integration with another one of it’s popular app Instagram. So what this sets up is a ecosystem combining Facebook and Instagram together, where creators can create on any one platform (Both Profiting Meta) and reach out to audience on both the platforms. But, for the most part, Facebook reels are not that visible</li>
                        <li>Instagram: Every since Instagram has introduced the Reels feature in it’s apps, It has become a major shareholder, almost eating the competition. In places like India where TikTok is banned, a majority of Influencers flock to Instagram to grow their audience and gain a following by making reels. In late 2022, Instagram announced that reels will be ranked higher by the Instagram algorithm. This caused major outlash from the users, especially the ones who still remembered Instagram to a mere photo sharing app. The Instagram algorithm is just as unforgiving and bad as the TikTok algorithm, just in the hands of Meta, then Byte Dance.</li>
                        <li>YouTube Shorts: YouTube Shorts are YouTube’s attempt to grab a share of the pie in the “short videos” sector. I have to admit though, YouTube Shorts are actually quite good. I mean algorithm and privacy wise. Don’t get me wrong, Google is no saint when it comes to privacy. But I rather my video data go to a company that already has my video preferences then it go to Meta, where a whole other profile is built. Why be tracked by two to three companies when you can be tracked my one. Why be tracked at all though</li>
                        <li>Spotify: Yes! Spotify of all platforms implemented this and it worked so good for me. I’ll get into it later in the blog.</li>
                    </ul>
                    <p>Speaking from a developer Point of View, I think that maintaining the code base, managing CDN costs and storage space is a lot easier than having a video hosting like YouTube. Given YouTube already has the infrastructure for a good video hosting, having shorts, means you don’t have to worry too much about resolutions, screen sizes and more. They are a concern and I am by no means under estimating how hard it is to actually build something of this scale and magnitude of users, I mean, hats off to all companies for that.</p>
                    <p>Although speaking as a user, I am not the biggest fan of this.</p>
                    <p>And this is working. I mean all my friends and I, whenever we are bored, whenever we have some time to kill, hell even when we are waiting from the elevator, we just whip out our phones and go on any shorts service. I mean, one of the prominent reasons I quit Instagram, were the reels. I was literally addicted to reels. And my feed would always reflect my mood. Which felt creepy, unnecessary and addictive.</p>
                    <h2 class="atx" id="personal-experience">Personal Experience</h2>
                    <p>Now, coming to Spotify. Spotify recently introduced their TikTok for Music like feature where you get recommendations for playlists and albums in the format of Instagram stories and for some reason, it clicked for me. I was never an avid user of Spotify, but now due to the recommendation feature, my usage saw a sharp increase. I am even contemplating buying their premium plan at this point. Now why did it work so good? Why is it so effective? Well, I realized, half of the times, I don’t know what I open apps for. I mean, I don’t know what I want. I believe gone are the days when you used to <em>search</em> the internet, you now go to the internet and the internet shows you stuff. Now this a much bigger problem that I want to address in a future post.</p>
                    <p>Spotify was criticized for this move, but hey! Good for You! As long as you don’t harvest that data too.</p>
                    <h2 class="atx" id="what-can-you-do">What can you do</h2>
                    <p>Well, you can’t do much. You can quit short content. But let’s be honest, you can’t escape it. It is everywhere. And hey, I am not here to tell you it is bad. I do sometimes like to chill with some YouTube shorts. Hey! Don’t give me that look. They are fun till a limit and only you can set that limit. With that, I want to leave you. I understand if you might find the flow of the blog a bit flunky, but that was intended. I want you to read it multiple times. Interpret it on your own and while you do so, remember, these are just my opinions. I tried to provide citations to all the <strong><strong><em>facts</em></strong></strong> I stated and if you think I might be wrong or you want to add a good citation, please contact me on my <a href="/social/mail">mail</a> or on <a href="/social/twitter">twitter.com</a>. You can also manually edit the page on <a href="/social/github">github.com</a> and send me a pull request.</p>
                    <p>Thanks for reading, hope you have a great day. Bye Bye 🙂.</p>
                </div>
                <div className="disclaimer">
                    <p>
                        Parts of this article are AI generated, including, but not limited to the TLDR and Introduction.
                    </p>
                </div>
            </main>
      </BlogLayout>
  )
}
