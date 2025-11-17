const poems = [
    "How could I forget you when your name is always woven into the rhythm of my soul?",
    "I have never seen someone like the moon and I have never seen someone like you. The moon shines the night and you shine my world.",
    "Can you? When I am lying in bed at night and my mind drifts your way when my day is spent lost in your fantasy can you feel me thinking about you?",
    "You make the world feel less like noise and more like music.",
    "You didn’t ruin me, you just made it harder for anyone else to reach me.",
    "And maybe, just maybe your heart is a garden in need of a gardener who knows how to plant hope.",
    "If someone were to ask me to describe 'beauty' my first thought would be to describe you because in my eyes beauty isn’t just a word beauty is you.",
    "You cross my mind in the smallest moments, when I’m laughing, when I’m lost in thoughts, when I see something beautiful. It’s like you're woven into everything good I feel.",
    "You mean a lot to me. Sorry if I didn’t show it in a way you needed.",
    "I love you in a way you'll never notice and this is the most painful kind of love you made me feel.",
    "The sunset reminds me of you.",
    "I realized I still loved you when I’m with you I don’t miss anything but when I’m with others I miss you.",
    "I’m going to plant you like seeds in my dreams and water them every night until you blossom into a reality that I can feel with my bare hands.",
    "Maybe it was your laugh or your eyes or your smile, maybe it was your hair or voice, personality or watching you talk but whatever it was it made me fall pretty damn hard.",
    "I skip some songs because they sound too much like you.",
    "I wanted to text you but I asked Jesus to watch over you for me.",
    "I read a book I think about you, I see a sunset, I think about you, I hear your favorite song, I think about you, and even in my dreams I still think about you.",
    "If loving you is a mistake, then let me be wrong forever because it feels right.",
    "You're the only fish in my sea, my only bird in the sky, the only planet in my solar system, my only star in the sky.",
    "I looked at you once and the idea of forever made sense, you looked at me once and my entire idea of forever changed its name to you.",
    "There is this tune I found that makes me think of you and I play it on repeat till I fall asleep.",
    "I dreamt about you nearly every night this week.",
    "I think we are both blind: you can’t see me and I can’t see anyone except you.",
    "My weakness isn’t a thing; it’s your eyes that calm me, your smile that ruins me, and your face I could love in every lifetime.",
    "I want to be every word your heart feels, the music that dances in your soul, allow me to be every sensation that caresses your skin.",
    "I still don’t know what to do with all the silence you left.",
    "I’ll leave the key to my heart under the mat in case you decide to come back.",
    "Call me!!",
    "When I miss you I experience a heartache that is impossible to endure.",
    "If love had a heartbeat it would sound like your name.",
    "I sleep to see you, sleep to forget you, somewhere in between I find you every day.",
    "I sleep so I can see you and I hate to wait so long.",
    "You matter to me more than you think and more than I show.",
    "You are amazingly pretty.",
    "You still have the prettiest brown eyes I’ve ever seen.",
    "In my eyes you are the masterpiece I could never stop adoring.",
    "Missing you comes in waves but this week I’ve been drowning.",
    "I dedicate the moon to you because it’s one thing we both see even when apart.",
    "Born to love you like a poem, forced to yearn for you like a miserable poet.",
    "Your smile is the sun that brightens my every day.",
    "Those beautiful brown eyes of yours have a way of speaking to my soul.",
    "The way you laugh makes the world feel lighter, happier, and softer.",
    "Every time I see you, I fall a little more in love with your energy.",
    "Your beauty isn’t just in your face, it’s in the way you move through life.",
    "You have the prettiest eyes I’ve ever seen, and they make my heart pause.",
    "Being around you is like listening to my favorite song on repeat.",
    "You shine effortlessly, and I love the vibe you bring wherever you go.",
    "The way you look at the world makes it impossible not to notice your magic.",
    "Every small thing about you feels like poetry written just for me."
];

let index = 0;

function nextPoem() {
    const poemEl = document.getElementById('poem');
    poemEl.innerText = poems[index];
    showNotification(poems[index]);
    index = (index + 1) % poems.length;
}

function animateEmojis() {
    const emojis = ['💖','🌸','✨','💫','😍'];
    for(let i=0;i<15;i++) {
        const span = document.createElement('span');
        span.className='emoji';
        span.innerText = emojis[Math.floor(Math.random()*emojis.length)];
        span.style.left = Math.random()*100+'vw';
        span.style.animationDuration = (3+Math.random()*5)+'s';
        document.body.appendChild(span);
    }
}

function showNotification(text) {
    if (Notification.permission === 'granted') {
        new Notification('💖 Daily Love 💖', { body: text });
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification('💖 Daily Love 💖', { body: text });
            }
        });
    }
}

window.onload = () => {
    nextPoem();
    animateEmojis();
    setInterval(nextPoem, 24*60*60*1000); // update daily
};
