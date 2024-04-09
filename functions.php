// Custom shortcode to fetch dynamically set email address
function custom_email_shortcode() {
    // Define email addresses based on reasons
    $emailAddresses = array(
        'General Inquiries Niseko & Furano' => 'info@rhythmjapan.com',
        'General Inquiries Hakuba' => 'hakuba@rhythmjapan.com',
        'Retail Inquiries' => 'retail@rhythmjapan.com',
        'Trips Inquiry' => 'trips@rhythmjapan.com',
        'Lessons & Guiding' => 'rides@rhythmjapan.com',
        'Marketing/Media' => 'marketing@rhythmjapan.com',
        'HR/jobs' => 'jobs@rhythmjapan.com'
    );

    // Get the selected reason (you might need to adjust this based on how Elementor stores the form data)
    $selectedReason = isset($_POST['form_fields']['1231']) ? sanitize_text_field($_POST['form_fields']['1231']) : '';

    // Get the corresponding email address
    $emailAddress = isset($emailAddresses[$selectedReason]) ? $emailAddresses[$selectedReason] : '';

    // Return the email address
    return $emailAddress;
}
add_shortcode('custom_email', 'custom_email_shortcode');
