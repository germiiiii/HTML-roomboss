<script>
document.addEventListener('DOMContentLoaded', function() {
    // Select the reason field
    var reasonField = document.querySelector('select[name="form_fields[1231]"]');
    var selectedReason = '';
    var emailAddress = '';
    // Define email addresses based on reasons
    var emailAddresses = {
        'General Inquires Niseko & Furano (Returns, Pick up & drop off, FAQs)': 'info@rhythmjapan.com',
        'General Inquires Hakuba (Returns, Pick up & drop off, FAQs)': 'hakuba@rhythmjapan.com',
        'Retail inquires (Shipping, warranty, retail FAQs)': 'retail@rhythmjapan.com',
        'Trips Inquiry': 'trips@rhythmjapan.com',
        'Lessons & Guiding (Rhythm Rides)': 'rides@rhythmjapan.com',
        'Marketing/Media': 'marketing@rhythmjapan.com',
        'HR/jobs': 'jobs@rhythmjapan.com'
    };

    // Function to find a key in emailAddresses that is a substring of the selected reason
    function findMatchingKey(selectedReason) {
        for (var key in emailAddresses) {
            if (selectedReason.includes(key)) {
                return key;
            }
        }
        return null;
    }

    // Function to handle form submission
    function handleFormSubmission(event) {
        // Get the selected reason
        selectedReason = reasonField.value.trim(); // Trim to remove any leading/trailing whitespace
        console.log('Selected reason:', selectedReason);
        
        // Find a matching key in emailAddresses
        var matchingKey = findMatchingKey(selectedReason);
        if (matchingKey) {
            // Get the corresponding email address
            emailAddress = emailAddresses[matchingKey];
            console.log('Email address:', emailAddress);

            // Set the email address to the <span> element with ID "custom-email"
            document.getElementById('custom-email').innerText = emailAddress;
        } else {
            console.error('No matching email address found for selected reason:', selectedReason);
        }
    }

    // Attach the handleFormSubmission function to the form submit event
    var form = document.querySelector('.elementor-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    } else {
        console.error('Form not found.');
    }
});

</script>
