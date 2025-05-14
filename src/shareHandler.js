// function shareQuoteHandler(index, quote) {
//     if (index === null) return;
//     const { text, author } = quote[index];
//     const shareText = encodeURIComponent(`«${quote}», ${author}`);
//     const telegramUrl = `https://t.me/share/url?text=${shareText}`;
//     window.open(telegramUrl, '_blank');
// }

// export default shareQuoteHandler