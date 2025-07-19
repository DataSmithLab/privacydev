# Choosing Privacy-Safe SDKs for Health Apps: A Developer's Guide

*Published: July 18, 2025*

As a mobile app developer building health applications, one of the most critical decisions you'll make is which third-party SDKs to integrate. The recent FTC enforcement action against **[Premom](https://www.cbsnews.com/news/premom-fertility-app-shared-user-data-ftc-says-easy-healthcare/)** fertility tracking app that collected data from hundreds of thousands of users—shows exactly why this matters.

This guide is your playbook for using analytics SDKs safely and avoiding their fate. It focuses on tools and practices that prioritize user privacy and data ownership, helping you get the insights you need without repeating the mistakes of the past.

## Recommended Analytics SDKs

When your app handles sensitive health data, choosing an analytics SDK is a critical decision. The business model of many popular analytics companies relies on collecting and processing vast amounts of user data, which puts them in direct conflict with your users' privacy needs and your legal obligations.

Our recommended SDKs are chosen based on a simple principle: **You should control the data.** This means prioritizing tools that are **open-source** and allow for **self-hosting**, ensuring no sensitive information ever leaves your servers.

### Matomo

<div class="admonition recommendation" markdown>

<!-- ![Matomo logo](https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Matomo_Logo.svg/512px-Matomo_Logo.svg.png){ align=right width="128" } -->

**Matomo (Self-Hosted)** is our top recommendation for health app analytics. As a powerful, open-source platform that you deploy on your own server infrastructure, it guarantees **100% data ownership**. No user data is ever sent to a third party, giving you powerful analytics features without the privacy trade-offs.

[:octicons-home-16: Homepage](https://matomo.org/){ .md-button .md-button--primary }
[:octicons-info-16:](https://matomo.org/docs/){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/matomo-org/matomo){ .card-link title="Source Code" }
[:octicons-heart-16:](https://matomo.org/thank-you/){ .card-link title="Contribute" }

</div>

### PostHog

<div class="admonition recommendation" markdown>

<!-- ![PostHog logo](https://posthog.com/brand/posthog-logo.svg){ align=right width="128" } -->

**PostHog (Self-Hosted)** is an open-source, all-in-one product analytics suite. Its self-hosting option lets you analyze sensitive user funnels and behavior privately, keeping all data in-house. It is an excellent choice for teams that need detailed product analytics without sending user data to third parties.

[:octicons-home-16: Homepage](https://posthog.com/){ .md-button .md-button--primary }
[:octicons-info-16:](https://posthog.com/docs){ .card-link title="Documentation" }
[:octicons-code-16:](https://github.com/PostHog/posthog){ .card-link title="Source Code" }
[:octicons-heart-16:](https://posthog.com/careers){ .card-link title="Contribute" }

</div>

## Essential Auditing Tools

You should never blindly trust an SDK's documentation or privacy policy. Verifying an SDK's actual behavior is a critical step in protecting your users and your business.

### Mitmproxy / Charles Proxy

<div class="admonition recommendation" markdown>

<!-- ![Mitmproxy logo](https://docs.mitmproxy.org/stable/mitmproxy-logo-2022-t.png){ align=right width="128" } -->

This isn't an analytics SDK, but an **essential auditing tool**. Use a network proxy like Mitmproxy (free, open-source) or Charles Proxy (commercial, GUI-based) to intercept and inspect every single piece of data your app sends over the internet. This is the only way to get the undeniable ground truth of an SDK's behavior.

[:octicons-home-16: Mitmproxy](https://mitmproxy.org/){ .md-button }
[:octicons-home-16: Charles Proxy](https://www.charlesproxy.com/){ .md-button }
[:octicons-info-16:](https://docs.mitmproxy.org/stable/){ .card-link title="Mitmproxy Docs" }
[:octicons-code-16:](https://github.com/mitmproxy/mitmproxy){ .card-link title="Mitmproxy Source" }

</div>

## Vetting Criteria

**Please note we are not affiliated with any of the projects we recommend.** In addition to our standard criteria, we have developed a clear set of requirements for handling sensitive data. We suggest you familiarize yourself with this list and use it as your own vetting checklist.

### Core Principles

<div class="grid" markdown>
<div markdown>
- ✅ **Prioritize Self-Hosting**
- ✅ **Demand Data Ownership**
- ✅ **Verify with Open Source**
</div>
<div markdown>
- ✅ **No Third-Party Data Sales**
- ✅ **Clear & Honest Terms**
- ✅ **Privacy-Focused by Default**
</div>
</div>

<details class="danger" markdown>
<summary>What's at Stake? The Cost of Getting It Wrong</summary>

The FTC's order against Premom shows the real-world consequences of failing to meet these standards. This is what could happen to you:

| Consequence | The Reality |
| :--- | :--- |
| **💰 Fines & Penalties** | Premom was hit with a monetary penalty. |
| **🗑️ Forced Data Deletion**| Ordered to tell Google, AppsFlyer, and others to delete all improperly collected user data. |
| **📢 Public Shaming**| Forced to post a notice on their app and website admitting to the unauthorized data sharing. |
| **👨‍⚖️ 20 Years of Audits** | Must undergo an independent privacy audit **every two years for the next 20 years**. |

</details>

### Technical Vetting Checklist

- **Analyze Network Traffic:** Use a tool like Mitmproxy to check for red flags in the data being sent, such as:
    - Sensitive health keywords (e.g., `LogFertility`)
    - Non-resettable identifiers (e.g., IMEI)
    - Precise GPS coordinates
- **Review Data Usage Clauses:** Scan the SDK's Terms of Service for "we may use data for our own business purposes," which is a major red flag.
- **Configure for Privacy:** Always go into the SDK's initialization code and disable all automatic and non-essential data collection features by default.

## References

 [United States v. Easy Healthcare Corp. Complaint for Permanent Injunction, Civil Penalty Judgment, and Other Relief. (17 May 2023)](https://www.ftc.gov/system/files/ftc_gov/pdf/2123124easyhealthcarecomplaint.pdf)

 [United States v. Easy Healthcare Corp. Stipulated Order for Permanent Injunction, Civil Penalty Judgment, and Other Relief. (22 June 2023)](https://www.ftc.gov/system/files/ftc_gov/pdf/2123124easyhealthcarpeorder.pdf)

<!-- # Choosing Privacy-Safe SDKs for Health Apps: A Developer's Guide

*Published: July 18, 2025*

As a mobile app developer building health applications, one of the most critical decisions you'll make is which third-party SDKs to integrate. The recent FTC enforcement action against Premom—a fertility tracking app that collected data from hundreds of thousands of users—shows exactly why this matters.

## The Premom Wake-Up Call

Premom promised users their health data wouldn't be shared with third parties without consent. But behind the scenes, the app was silently transmitting sensitive reproductive health information to multiple companies through integrated SDKs. The result? A $100,000 FTC fine and a permanent ban on sharing user health data for advertising.

The data being shared included:

- Menstrual cycle information
- Fertility and pregnancy status
- Precise location data
- Device identifiers that can't be changed
- Social media account information

All of this happened through "automated tracking tools"—the SDKs that seemed essential for analytics and growth.

## The SDK Privacy Minefield

Most popular SDKs weren't designed with health data privacy in mind. Here's what you need to know about common choices:

### Google Firebase

**What it offers:** Comprehensive analytics, crash reporting, user engagement tracking

**Privacy concerns:** Automatic data collection, broad data sharing within Google ecosystem, difficult to limit data scope for health apps

**Better for:** Non-health apps where Google's data practices align with your privacy needs

### Facebook Analytics (Meta)

**What it offers:** User behavior tracking, conversion analytics, audience insights

**Privacy concerns:** Extensive data sharing for advertising, persistent tracking across apps and web

**Health app risk:** High—Meta's business model depends on advertising data

### AppsFlyer

**What it offers:** Attribution tracking, marketing analytics, fraud prevention

**Privacy concerns:** Shares data with advertising networks, creates detailed user profiles

**Premom used this:** Yes, and it contributed to their FTC violation

### Umeng (Alibaba)

**What it offers:** Analytics, push notifications, user tracking

**Privacy concerns:** Data potentially subject to Chinese data laws, broad data collection

**Geographic risk:** Especially problematic for US health apps due to data sovereignty issues

## What Went Wrong

Premom's developers made several critical mistakes:

1. **Blind integration**: They added SDKs without understanding what data would be shared
2. **No data minimization**: SDKs collected far more information than needed
3. **Weak encryption**: Sensitive data wasn't properly protected in transit
4. **No usage controls**: Third parties could use the data however they wanted
5. **Misleading users**: Privacy policies didn't reflect actual data practices

## Building Better: Privacy-First SDK Selection

### Start with Data Mapping

Before integrating any SDK, document exactly what data it will access and where it goes. For health apps, this means:

- What health information is collected
- Which third parties receive data
- How data is used by each party
- Where data is stored geographically

### Choose Minimal SDKs

Ask yourself: Do you really need that feature? Every SDK adds privacy risk. For health apps, consider:

- Self-hosted analytics instead of third-party services
- Privacy-focused alternatives like Plausible or Fathom
- Building core features in-house when possible

### Implement Data Controls

When you do use SDKs:

- Configure them to collect minimal data
- Turn off automatic data sharing features
- Set up data retention limits
- Regularly audit what's being transmitted

### Legal Compliance

For health apps, remember:

- HIPAA may apply if you handle protected health information
- The FTC's Health Breach Notification Rule requires disclosure of unauthorized data sharing
- State privacy laws like California's CCPA have specific health data protections

## Recommended Alternatives

### For Analytics

- **Plausible**: Privacy-focused, no personal data collection
- **Fathom**: GDPR-compliant, minimal data collection
- **Self-hosted Matomo**: Full control over data

### For Crash Reporting

- **Sentry**: Configurable data collection, data residency options
- **Bugsnag**: Privacy controls, data filtering capabilities

### For User Engagement

- **OneSignal**: Transparent data practices, opt-in features
- **Pusher**: Real-time features with privacy controls

## The Bottom Line

The Premom case isn't an outlier—it's a preview of stricter enforcement coming to health apps. The FTC is explicitly targeting companies that promise privacy but deliver surveillance.

As developers, we have a choice: build trust through genuine privacy protection, or risk becoming the next enforcement target. The SDKs you choose today will determine which path you're on.

Your users are trusting you with their most intimate health information. Choose your tools—and your partners—accordingly.

---

*This article is part of Privacy Dev's recommendations for building privacy-respecting applications. For more developer-focused privacy guidance, see our [Tools section](../tools.md).* -->
