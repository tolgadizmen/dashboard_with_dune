export default async function handler(req, res) {
    const options = {
        method: 'GET',
        headers: {
            'X-Dune-API-Key': process.env.dune_test_talent_api,
            'Accept': 'application/json'
        }
    };

    try {
        const url = 'https://api.dune.com/api/v1/query/4740114/results?limit=1000';
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Extract the specific data point we need
        const result = {
            total_builderplus_revenue_eth: data.result.rows[0].total_builderplus_revenue_eth
        };

        res.status(200).json(result);

    } catch (error) {
        console.error('Fetch Error:', error);
        res.status(500).json({ error: error.message });
    }
} 