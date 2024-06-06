document.addEventListener('DOMContentLoaded', function() {
    const formatButton = document.getElementById('formatButton');
    const copyButton = document.getElementById('copyButton');
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');

    formatButton.addEventListener('click', function() {
        const input = inputText.value;
        const formattedText = formatReferences(input);
        outputText.value = formattedText;
    });

    copyButton.addEventListener('click', function() {
        outputText.select();
        document.execCommand('copy');
        alert('Copied to clipboard!');
    });

    function formatReferences(text) {
        // Add your formatting logic here
        // For example, converting all text to uppercase
        return text.toUpperCase();  // This is just a placeholder
    }
});
