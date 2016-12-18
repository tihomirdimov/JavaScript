function formatHelper([input]) {
    console.log(input
        .replace(/([.,!?:;])\s*/g,  (match, g) => g + ' ')
        .replace(/\s+([.,!?:;])/g, (match, g) => g)
        .replace(/\.\s*\.\s*\.\s*!/g, '...!')
        .replace(/\.\s+(\d+)/g, (match, g) => '.' + g)
        .replace(/"([^"]+)"/g, (match, g) => `"${g.trim()}"`));
}


formatHelper(['Terribly formatted text   .  With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .   Make,sure to give:proper spacing where is needed... ! ']);