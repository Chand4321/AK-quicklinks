document.addEventListener('DOMContentLoaded', function () {
    const targetEmailInput = document.getElementById('targetEmail');
    const articleStatusSelect = document.getElementById('articleStatus');
    const docLinkTextarea = document.getElementById('docLink');
    const feedbackNoteTextarea = document.getElementById('feedbackNote');
    const sendEmailBtn = document.getElementById('sendEmailBtn');

    // Pre-existing snippet (can be customized)
    const emailSnippet = `
Dear Author,

This email is regarding the content feedback for the following:

Article Status: [Article Status Placeholder]
Document Link: [Document Link Placeholder]


Feedback:

[Feedback Note Placeholder]

---

Contact us for any queries alkitab.space@gmail.com. Thank you for your time and consideration.

Sincerely,
Editorial team.
`;

    sendEmailBtn.addEventListener('click', function () {
        const targetEmail = targetEmailInput.value.trim();
        const articleStatus = articleStatusSelect.value;
        const docLink = docLinkTextarea.value.trim();
        const feedbackNote = feedbackNoteTextarea.value.trim();

        if (!targetEmail) {
            alert('Please enter a target email address.');
            targetEmailInput.focus();
            return;
        }

        if (!articleStatus) {
            alert('Please select an article status.');
            articleStatusSelect.focus();
            return;
        }

        if (!docLink) {
            alert('Please provide the document link.');
            docLinkTextarea.focus();
            return;
        }

        if (!feedbackNote) {
            alert('Please enter your feedback note.');
            feedbackNoteTextarea.focus();
            return;
        }

        // Incorporate all dynamic fields into the snippet
        let fullEmailBody = emailSnippet
            .replace('[Article Status Placeholder]', articleStatus)
            .replace('[Document Link Placeholder]', docLink)
            .replace('[Feedback Note Placeholder]', feedbackNote);

        // Encode the components for the URL
        const subject = encodeURIComponent(`Content Feedback - ${articleStatus}`); // Subject now includes status
        const body = encodeURIComponent(fullEmailBody);

        // Construct the mailto URL
        const mailtoLink = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

        // Open the mailto link
        window.location.href = mailtoLink;
    });
});