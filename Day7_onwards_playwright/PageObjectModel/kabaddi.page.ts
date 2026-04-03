import { Page, Locator } from '@playwright/test'

export class ProKabaddiPage {

readonly page: Page
readonly recentTab: Locator
readonly matches: Locator

constructor(page: Page){
    this.page = page

    this.recentTab = page.locator("xpath=//span[text()='Recent']")
    this.matches = page.locator("xpath=//div[contains(@class,'match-card')]")
}

async openWebsite(){
    await this.page.goto("https://www.prokabaddi.com/schedule-fixtures-results?tab=recent")
}

async clickRecent(){
    await this.recentTab.click()
}

async getFinalMatchDetails(){
    await this.page.waitForLoadState('networkidle')
    await this.matches.first().waitFor()
    const finalMatch = this.matches.last()

    const team1 = await finalMatch
        .locator("xpath=(.//p)[1]")
        .textContent()

    const team2 = await finalMatch
        .locator("xpath=(.//p)[2]")
        .textContent()

    const score1 = await finalMatch
        .locator("xpath=(.//span)[1]")
        .textContent()

    const score2 = await finalMatch
        .locator("xpath=(.//span)[2]")
        .textContent()

    return { team1, team2, score1, score2 }
}

}