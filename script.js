document.getElementById('reveal-button').addEventListener('click', function() {
    const poemText = `Through miles apart, we’ve made our way, 
In every hour, in every day. 
The distance tried, but couldn’t break, 
The love we share, the vows we make. 

We’ve faced the silence, felt the pain, 
But every storm has passed again. 
Each tear that fell, each night we missed, 
Just brought us closer to this bliss. 

A year has passed, but still, I find 
Your love is always on my mind. 
In every text, in every call, 
You’re in my heart, you’re my all. 

No distance wide, no time too long, 
Could ever make our love feel wrong. 
Through all the highs, and all the lows, 
It’s you and me, that’s all I know. 

So here’s to us, to all we’ve been, 
To new beginnings, and what’s within. 
Happy New Year, my heart, my guide— 
With you, my love, I’ll always ride.`;

    const poemElement = document.getElementById('poem');
    poemElement.textContent = poemText;

    // Fade in the poem container
    const poemContainer = document.getElementById('poem-container');
    poemContainer.style.opacity = 1;

    // Disable the button after revealing
    this.style.display = 'none';

    // Enable scrolling animation
    const poem = document.getElementById('poem');
    poem.style.animationPlayState = 'running'; // Start scrolling animation
});
