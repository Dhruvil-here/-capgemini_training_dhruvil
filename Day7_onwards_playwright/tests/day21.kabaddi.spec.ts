import { test } from '@playwright/test'
import { ProKabaddiPage } from '../PageObjectModel/kabaddi.page.ts'

test('Get finals match details using pipeline operator', async ({ page }) => {

    const pk = new ProKabaddiPage(page)

    await pk.openWebsite()
    await pk.clickRecent()

    const finalData = await pk.getFinalMatchDetails()

    const result1 = {
        match: `${finalData.team1} vs ${finalData.team2}`,
        score: `${finalData.score1} - ${finalData.score2}`
    }

    console.log("Final Match:", result1.match)
    console.log("Score:", result1.score)
}).retries(2)