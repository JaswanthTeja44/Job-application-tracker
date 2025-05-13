    const form = document.getElementById('applicationForm');
    const applicationsList = document.getElementById('applications');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const applicantName = document.getElementById('applicantName').value.trim();
      const company = document.getElementById('company').value.trim();
      const interviewDate = document.getElementById('interviewDate').value;
      const status = document.getElementById('status').value;

      if (!applicantName || !company || !interviewDate || !status) {
        alert("All fields are required.");
        return;
      }

      const card = document.createElement('div');
      card.className = 'application-card';
      card.innerHTML = `
        <h3>${applicantName}</h3>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Interview Date:</strong> ${new Date(interviewDate).toDateString()}</p>
        <p><strong>Status:</strong> <span class="status-${status.toLowerCase().replace(/ /g, '-')}">${status}</span></p>
      `;

      applicationsList.prepend(card);

      // Reset form
      form.reset();
    });
