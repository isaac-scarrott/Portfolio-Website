import React from "react";

import {
  BlogPostContainer,
  BlogPostTitleContainer,
  BlogPostTitle,
  BlogPostDate,
  BlogPostContentContainer,
  BlogPostImage,
  BlogPostTextContainer
} from './Styles'

export default function BlogPost() {
  return (
    <BlogPostContainer>
      <BlogPostTitleContainer>
        <BlogPostTitle>
          Why you should use a consistent ref...and why you shouldn't care
        </BlogPostTitle>
        <BlogPostDate>March 2020</BlogPostDate>
      </BlogPostTitleContainer>
      <BlogPostContentContainer>
        <BlogPostImage src='https://hackernoon.com/hn-images/1*sby1Jwafc8jkPSbCfAgTnw.jpeg' />
        <BlogPostTextContainer>
          It's not his fault. I know you're going to want to, but you can't
          blame him. He really has no idea how it happened. I kept trying to
          come up with excuses I could say to mom that would keep her calm when
          she found out what happened, but the more I tried, the more I could
          see none of them would work. He was going to get her wrath and there
          was nothing I could say to prevent it. It was a weird concept. Why
          would I really need to generate a random paragraph? Could I actually
          learn something from doing so? All these questions were running
          through her head as she pressed the generate button. To her surprise,
          she found what she least expected to see. Since they are still
          preserved in the rocks for us to see, they must have been formed quite
          recently, that is, geologically speaking. What can explain these
          striations and their common orientation? Did you ever hear about the
          Great Ice Age or the Pleistocene Epoch? Less than one million years
          ago, in fact, some 12,000 years ago, an ice sheet many thousands of
          feet thick rode over Burke Mountain in a southeastward direction. The
          many boulders frozen to the underside of the ice sheet tended to
          scratch the rocks over which they rode. The scratches or striations
          seen in the park rocks were caused by these attached boulders. The ice
          sheet also plucked and rounded Burke Mountain into the shape it
          possesses today. The words hadn't flowed from his fingers for the past
          few weeks. He never imagined he'd find himself with writer's block,
          but here he sat with a blank screen in front of him. That blank screen
          taunting him day after day had started to play with his mind. He
          didn't understand why he couldn't even type a single word, just one to
          begin the process and build from there. And yet, he already knew that
          the eight hours he was prepared to sit in front of his computer today
          would end with the screen remaining blank. They argue. While the
          argument seems to be different the truth is it's always the same. Yes,
          the topic may be different or the circumstances, but when all said and
          done, it all came back to the same thing. They both knew it, but
          neither has the courage or strength to address the underlying issue.
          So they continue to argue.
        </BlogPostTextContainer>
      </BlogPostContentContainer>
    </BlogPostContainer>
  );
}
