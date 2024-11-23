export async function checkRateLimits(apiKey: string, url: string) {
  try {
    const response = await fetch(url, {
      method: 'GET', // or 'POST', depending on your API call
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Log the rate limit headers
    console.log('Rate Limit Headers:');
    console.log('x-ratelimit-limit-requests:', response.headers.get('x-ratelimit-limit-requests'));
    console.log('x-ratelimit-limit-tokens:', response.headers.get('x-ratelimit-limit-tokens'));
    console.log('x-ratelimit-remaining-requests:', response.headers.get('x-ratelimit-remaining-requests'));
    console.log('x-ratelimit-remaining-tokens:', response.headers.get('x-ratelimit-remaining-tokens'));
    console.log('x-ratelimit-reset-requests:', response.headers.get('x-ratelimit-reset-requests'));
    console.log('x-ratelimit-reset-tokens:', response.headers.get('x-ratelimit-reset-tokens'));

  } catch (error) {
    console.error('Error fetching rate limits:', error);
  }
}
