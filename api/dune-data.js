export default async function handler(req, res) {
    const options = {
        method: 'GET',
        headers: {
            'X-Dune-API-Key': process.env.dune_test_talent_api,
            'Accept': 'application/json'
        }
    };

    try {
        // Fetch Builder Plus Revenue
        const revenueUrl = 'https://api.dune.com/api/v1/query/4740114/results?limit=1000';
        const revenueResponse = await fetch(revenueUrl, options);

        // Fetch Talent Vault Stakers
        const stakersUrl = 'https://api.dune.com/api/v1/query/4599454/results?limit=1000';
        const stakersResponse = await fetch(stakersUrl, options);

        if (!revenueResponse.ok || !stakersResponse.ok) {
            throw new Error(`HTTP error! status: ${revenueResponse.status} ${stakersResponse.status}`);
        }

        const revenueData = await revenueResponse.json();
        const stakersData = await stakersResponse.json();

        const result = {
            total_builderplus_revenue_eth: revenueData.result.rows[0].total_builderplus_revenue_eth,
            stakers: stakersData.result.rows.map(row => ({
                address: row.unique_staker_address,
                total_staked: row.total_staked,
                profile_url: row.passport_profile_url,
                score: row.score,
                last_staking_time: row.staker_evt_block_time
            }))
        };

        res.status(200).json(result);

    } catch (error) {
        console.error('Fetch Error:', error);
        res.status(500).json({ error: error.message });
    }
} 