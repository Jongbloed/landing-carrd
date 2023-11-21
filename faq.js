Vue.component('zz-accordion', {
    props: ['contents'],
    data: function () {
        return {}
    },
    methods: {
        expand: function (e, i) {
            e.preventDefault();
            let el = this.$refs['accordion-body-' + i][0];
            if (this.contents[i].active === false) {
                this.contents[i].active = true;
                TweenLite.to(el, 1, {
                    height: el.scrollHeight,
                    ease: Elastic.easeOut.config(1, 0.3)
                });
            } else {
                this.contents[i].active = false;
                TweenLite.to(el, 0.5, {
                    height: 0,
                    ease: Bounce.easeOut
                });
            }
        }
    },
    template: `
<div class="accordion">
<div
class="accordion-item"
v-for="content, i in contents"
v-bind:class="{ 'accordion-active': content.active }"
>
<div class="accordion-header">
<a href="javascript:void(0)" v-on:click="expand(event, i)">
<div class="accordion-header-div">{{ content.title }}</div>
<div class="accordion-header-div">
<div class="accordion-caret"></div>
</div>
</a>
</div>
<div class="accordion-body" v-bind:ref="'accordion-body-' + i">
<div class="accordion-content"><span v-html="content.description"></span></div>
<!--<div class="accordion-content">{{ content.description }}</div>-->
</div>
</div>
</div>
`
});

// ----------

var app = new Vue({
    el: '#app',
    data: {
        contents: [{
            title: 
            'What will happen when I click "Apply To Join"?',
            description: 
            'When you click "Apply To Join" and book an intro call, you receive an email with a calendar event. <br/>'+
            'This calendar event has a Zoom link, which you can join at the time of the call.<br/>' +
            'In this call, you can talk to Erik and ask him anything, so that you can make up your own mind whether Inner Alchemists is for you.<br/>' + 
            'After the call, you\'ll receive the original Self Healing Sequence PDF as a complimentary gift. <br/>'+
            'This is the script that Erik and his partner Maria started out with, when they were figuring out how to use their relationship triggers for growth.<br/>'+
            'Whether you end up joining or not, you\'ll be able to use this script to get started doing inner work, alone or together with your partner or buddy. <br/>'+
            'It\'s pretty powerful! <br/>'+
            'And the call is no-strings-attached.<br/>'+
            'So what better way to spend 15 minutes?',
            active: false
        }, {
            title: 
            'What is the Inner Alchemists Method?',
            description: 
            'The Inner Alchemists Method is what we do here:<br/>'+
            '✓ We log our feelings<br/>'+
            '✓ We help each other communicate with our parts (through pair-self-therapy)<br/>'+
            '✓ We heal our childhood trauma through deep feeling work<br/>'+
            '✓ We share the state of our feelings<br/>'+
            '✓ We support each other through difficult emotions<br/>'+
            '✓ We encourage each other to stay on track with our personal growth goals<br/>'+
            '✓ We learn about our psyche and subconcious',
            active: false
        }, {
            title: 
            'Why can\'t I just pay now and join with one click, like with other communities? Why the intro call?',
            description: 
            'Despite the extremely affordable price, we want to keep the quality of the community extremely high. <br/>'+
            'Unlike regular peer support groups, we only want people who are motivated to show up for meetings, who enjoy exploring their subconscious through inner work, '+
            'and who like being supportive to others as well as being supported (not "all take no give"). <br/><br/>'+
            'Those people will get the best results in Inner Alchemists. <br/>'+
            'So, as much as the call is a no-strings-attached introduction, so <em>you</em> can see if you like it, it is also an opportunity for us to see if you\'re a good fit for the group.<br/>'+
            'And we check for that by getting to know you a bit during the intro chat. <br/>'+
            'We also like to check some basic boxes like English speaking and comprehension, and good enough internet quality for Zoom calls.<br/>'+
            'This is because the calls are very interactive, a lot of exercises will be in pairs or groups of 3-4, and we want everyone to have a quality experience.',
            active: false
        }, {
            title: 
            'Do I have to attend every call?',
            description: 
            'No!<br/>'+
            'The group sessions are not mandatory. We recommend that you attend them whenever you can, because they bring our members new insights and breakthroughs on their healing journey every week.<br/>'+
            'However, even when you\'re too busy to hop on Zoom, you can still get plenty of value from the courses, which contain the most powerful, tried-and-tested exercises that Erik and Maria'+
            ' personally use to do solo (or paired) self-therapy. <br/>',
            active: false
        }, {
            title: 
            'When are the group calls?',
            description: 
            'At the moment, the group calls are happening on Tuesday 19:00 CET, 17:00 PST, and 20:00 EST<br/>'+
            'For an up-to-date schedule, ask Erik during the intro call.<br/>'+
            'We guarantee 2 group sessions a month, but it\'s usually 4 for each time zone unless around the holidays. <br/>'+
            'If you use Google Calendar or Apple Calendar, you can subscribe to our live events calendar which is always up-to-date, so you never have to miss a meeting.',
            active: false
        }, {
            title: 
            'How will I get access to the content?',
            description: 
            'Click "Apply To Join" and book an intro zoom chat with Erik. At the end, you\'ll know whether this is for you. If it feels like a good fit from both sides, you can pay and join right away.<br/>'+
            'As soon as you sign up, you will receive a link to the site where all the content and our discussion board are hosted.<br/>'+
            'You can access the course videos any time of day, and on any internet connected device. <br/>'+
            'You can also see all future events there, and copy the calendar into your own digital calendar, so you never have to miss a meeting.',
            active: false
        }, {
            title: 
            'Can\'t I find this information on YouTube?',
            description: 
            'There\'s a lot of free information out there on YouTube. <br/>' +
            ' I personally spent thousands of hours watching educational videos about self-development, the subconscious mind, childhood trauma and shadow work.<br/>'+
            ' But when I was starting out, I just wished I had a community that could filter the rubbish from the gold.<br/>'+
            ' Something I could put my trust in.<br/>'+
            ' Not just that, in Inner Alchemists you also meet tons of like-minded people to share the journey with, and even connect deeply during sharings and live exercises.',
            active: false
        }, {
            title: 
            'Who is this community ideal for?',
            description: 
            'It\'s specifically designed for people who:<br/>'+
            '✓ Enjoy introspection and self-reflection<br/>'+
            '✓ Who have an interest in their own psychology<br/>'+
            '✓ Who know they have some inner work to do, in order to move forward in life<br/>'+
            '✓ Who know the value of a supportive circle<br/>'+
            '✓ Who are motivated to support others too.',
            active: false
        }, {
            title: 
            'How is it structured?',
            description: 
            'Once you join Inner Alchemists, you will get:<br/>'+
            '✓ 2-4 group sessions a month hosted by Erik, where you do partnered inner work and meet your trusted sharing group<br/>'+
            '✓ Access to the courses, enabling you to go deep on your own inner work solo as well<br/>'+
            '✓ Access to a supportive community to share your journey of healing and inner growth with. <br/>'+
            'Both the courses and community are hosted on a protected community and posting space.',
            active: false
        }, {
            title: 
            'How has this Inner Alchemists Method been tested?',
            description: 
            'The strategies shared in this course are the exact ones Erik used to help himself and his clients to quiet the negative self-talk, foster self-love and self-esteem, '+
            'attract and maintain solid loving relationships through authenticity and vulnerability, and solve anxiety & depression related problems like panic attacks and night terrors.<br/><br/>'+
            'In other words:<br/>'+
            '✓ Erik and Maria developed them and tried the techniques on each other, when they were looking for something that doesn\'t require a therapist present<br/>'+
            '✓ Erik used them on his coaching clients with great results (see testimonials)<br/>'+
            '✓ Now, Inner Alchemists members are using them with great results (see testimonials), and they don\'t even need Erik anymore!',
            active: false
        }, {
            title: 
            'How much does Inner Alchemists cost?',
            description: 
            'Despite its high value, the course and community are available for only one payment of €197 (even less if you have a coupon code),'+
            ' which is a non-refundable joining fee which gets you access to the platform and the courses, and the months thereafter, access to course, content and community only costs €27 per month.',
            active: false
        }, {
            title: 
            'What\'s different about Inner Alchemists?',
            description: 
            'We attack problems by the <strong>root cause</strong>, which is commonly <em>(wrongly!)</em> believed to be "negative subconscious beliefs".<br/>'+
            'Negative subconscious beliefs are just the tip of the iceberg for us.<br/>'+
            ' Our work has the potential to reshape your personality from the ground up, for maximum mental wellness, by exploring where it got shaped (in childhood) and working up from there.<br/>'+
            ' That means <strong>lasting change</strong>.<br/>'+
            ' We know that surface-level issues like negative self talk, low self-worth and anxiety stem from unresolved trauma. <br/>'+
            'To achieve lasting change, we will have to go quite a bit deeper than your run-of-the-mill “tips & tricks”, and the superficial affirmations-based feel-good approaches which you might '+
            'find in other courses. <br/>'+
            'The advantage of this root-cause approach, is that is it not only solves your surface level issue, but also transforms you into <em>the person you always felt you could be.</em> <br/>'+
            'The downside is that you have to be up for the "real work" - it can be emotionally challenging.<br/>'+
            ' If you\'re used to self-helpy things like "replacing negative thoughts with positive thoughts", this will open up a whole new world to you, and I hope you\'re ready.<br/>'+
            ' This is the kind of change that affects other areas of life too. <br/>'+
            'Although we can make no such promises, it\’s not uncommon for clients to suddenly have a “lucky” break in their career, suddenly meet the right person, get “spontaneously” invited into a new' +
            'social circle which resonates with their new life direction, or seem to have become much more attractive to the other sex, '+
            'after doing the exercises taught in Inner Alchemists for some time.',
            active: false
        }, {
            title: 
            'How long until I get results?',
            description: 
            'Almost everyone feels an emotional shift, a sense of lightness, increased self-love and feeling integrated, after the first or second time they do one of the exercises.<br/>'+
            ' <em>This is a signal to keep going.</em> <br/>'+
            ' We know that the process of integrating all the unconscious material can take years, but if you take the exercises seriously, you should notice them working for you within the first month.',
            active: false
        }, {
            title: 
            'What\'s the difference with therapy?',
            description: 
            '<strong>Inner Alchemists is an excellent complement to therapy.</strong> <br/>'+
            'During a one-to-one therapy session, an experienced therapist can help you make sense of your life and how your current feelings relate to patterns from childhood.<br/>'+
            ' It is an <em>asymmetrical relationship</em>: you submit yourself to a professional whose experience you trust.<br/>'+
            ' Then you can go to heal that childhood pattern and integrate those insights further with an Inner Alchemists session, enjoying a <em>symmetrical relationship</em>: '+
            'you facilitate for each other using the simple proven steps, and the power dynamic is balanced. <br/>'+
            'The advantage to therapy is that you can benefit from years of experience. <br/>'+
            'The advantage to Inner Alchemists is you get 80% of the benefits of therapy, through crowdsourcing human intuition with a mutual relationship and while making real connections '+
            'with like-minded people. <br/>'+
            'Many of our members choose to have 1-on-1 sessions with a therapist as well.',
            active: false
        }, {
            title: 
            'What does negative self-talk have to do with childhood trauma?',
            description: 
            'The vast majority of mental issues people face, result from <strong>inner conflict</strong>.<br/>'+
            'Inner conflict is when you say: "part of me wants to... but part of me says..." and get stuck in the middle.<br/>'+
            'Inner conflict causes negative self-talk, a harsh inner critic, and can even make you feel completely blocked and anxious when trying to express yourself. <br/>'+
            'More often than not, <em>this inner conflict has its roots in residual childhood pain</em>.<br/>'+
            'Because releasing pain from childhood is an ongoing process that unfolds at a different pace for each person, a few weeks of retreat are not enough to get it done.<br/><br/>'+
            '<em>And who can really afford to take a year off?</em>',
            active: false
        }, {
            title: 
            'What are the benefits of deep feeling work?',
            description: 
            '✓ <strong>Emotional Resilience:</strong> Deep feeling work can help individuals better understand and process their emotions. '+
            'This can lead to increased emotional resilience, allowing them to cope more effectively with life\'s challenges and stressors. By addressing past traumas and unresolved emotional issues,'+
            ' individuals can build the emotional strength needed to navigate difficult situations.<br/><br/>'+
            '✓ <strong>Improved Mental Health:</strong> Deep healing work can have a positive impact on mental health by reducing symptoms of conditions such as anxiety, depression, and'+
            ' post-traumatic stress disorder (PTSD). It provides a safe space for individuals to explore and address the root causes of their mental health issues, leading to symptom reduction and '+
            'improved overall well-being.<br/><br/>'+
            '✓ <strong>Enhanced Self-Awareness:</strong> Engaging in deep healing work encourages self-reflection and self-awareness. Through introspection and exploration of one\'s thoughts, feelings,'+
            ' and behaviors, individuals can gain a deeper understanding of themselves, their motivations, and their life choices. '+
            'This self-awareness can lead to personal growth and more fulfilling relationships.<br/><br/>'+
            '✓ <strong>Improved Relationships:</strong> Deep healing work can positively impact relationships by helping individuals address unresolved conflicts, communication issues, and past traumas'+
            ' that may be affecting their interactions with others. By developing a better understanding of their own needs and behaviors, individuals can build healthier and more fulfilling relationships'+
            ' with friends, family, and romantic partners.<br/><br/>'+
            '✓ <strong>Physical Health Benefits:</strong> Emotional and psychological healing can have a direct impact on physical health. Chronic stress and unresolved emotional issues can contribute to'+
            ' physical health problems such as high blood pressure, heart disease, and autoimmune disorders. Engaging in deep healing work can reduce stress, improve sleep, and boost the immune system, '+
            'leading to better overall physical health.',
            active: false
        }]
    }
});