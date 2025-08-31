// Test script for the contact form API
const testContactForm = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Message',
        message: 'This is a test message to verify the contact form functionality.'
      })
    });

    const result = await response.json();
    console.log('Response:', result);
    
    if (result.success) {
      console.log('✅ Contact form test successful!');
    } else {
      console.log('❌ Contact form test failed:', result.message);
    }
  } catch (error) {
    console.error('❌ Error testing contact form:', error.message);
  }
};

// Test the health endpoint first
const testHealth = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/health');
    const result = await response.json();
    console.log('Health check:', result);
    
    if (result.status === 'OK') {
      console.log('✅ Server is running');
      // Test contact form after health check
      await testContactForm();
    }
  } catch (error) {
    console.error('❌ Server not responding:', error.message);
  }
};

// Run tests
testHealth();
