

# Product Requirements Document: Aidhd

## 1. Target User & Pain Points
[cite_start]The primary user for Aidhd is the average Indian citizen—often a middle-income earner or an elderly individual—navigating the complex and often intimidating world of health insurance[cite: 39]. 

**Primary Pain Points:**
* [cite_start]**Jargon Overload:** Terms like "co-pay," "deductible," and "waiting periods" are confusing and often left unexplained[cite: 58, 68].
* [cite_start]**Lack of Personalization:** Standard platforms often suggest "top-rated" policies rather than those specifically suited to an individual's chronic health conditions or financial bracket[cite: 53, 55].
* [cite_start]**Clinical Detachment:** The process feels transactional and cold, ignoring the emotional weight of health-related financial decisions[cite: 56, 107].
* [cite_start]**Information Asymmetry:** Users struggle to verify if a recommendation is actually grounded in the policy’s legal text or just a sales pitch[cite: 68, 111].

## 2. Feature Prioritization & Rationale
[cite_start]We have prioritized features that maximize **Document Intelligence** and **Empathy**, as these are the most heavily weighted scoring criteria[cite: 105, 110, 118].

1.  **Core RAG Engine (High Priority):** This is the foundation. [cite_start]Without accurate retrieval from uploaded documents, the system fails the "Document Intelligence" requirement[cite: 111, 112].
2.  [cite_start]**6-Field Personalized Profile (High Priority):** Exactly 6 fields are used to drive every recommendation, ensuring we meet the strict project specifications[cite: 47, 52].
3.  **Interactive Chat Explainer (High Priority):** Essential for "Transparency and Explainability." [cite_start]This allows users to ask "What does this mean for *me*?"[cite: 64, 65, 113].
4.  [cite_start]**Admin Knowledge Management (Medium Priority):** Necessary for a maintainable system where policy updates don't require code changes[cite: 14, 71].

## 3. Recommendation & Matching Logic
[cite_start]The AI Agent follows a weighted logic to match the 6 profile fields to policy attributes[cite: 41, 51]:

| User Profile Field | Recommendation Driver |
| :--- | :--- |
| **Age** | [cite_start]Adjusts premium sensitivity and flags specific senior-citizen waiting periods[cite: 51]. |
| **Lifestyle** | [cite_start]Active/Athlete profiles are prioritized for policies with higher OPD (Outpatient Department) coverage[cite: 51]. |
| **Pre-existing Conditions** | [cite_start]The primary filter for identifying exclusions and mandatory waiting period clauses in the policy text[cite: 51]. |
| **Annual Income** | [cite_start]Sets a "hard cap" on premium affordability and recommends a Target Coverage Amount (Sum Insured)[cite: 51]. |
| **City / Tier** | [cite_start]Prioritizes policies with extensive network hospital coverage in Metro vs. Tier-2/3 cities[cite: 51]. |
| **Full Name** | [cite_start]Used to personalize the "Why This Policy" narrative to increase user trust and warmth[cite: 48, 57]. |

## 4. Grounding & Transparency Strategy
[cite_start]To prevent hallucinations, Aidhd employs a **strict grounding protocol**[cite: 92, 93]:
* [cite_start]**Source Citation:** Every factual claim in the chat or recommendation must cite a specific clause from the uploaded document[cite: 68, 112].
* [cite_start]**Structured Output:** Every recommendation must generate a Peer Comparison Table, a Coverage Detail Table, and a personalized narrative[cite: 61, 62, 63].
* [cite_start]**Tone Guardrails:** The agent is instructed to use "warm" language and must define every insurance term the first time it appears[cite: 56, 58, 107].

## 5. Assumptions
* [cite_start]**Document Format:** We assume policy documents are provided in PDF, JSON, or TXT formats and contain standard coverage terminology[cite: 72].
* [cite_start]**Admin Security:** We assume that environment-variable driven authentication is sufficient for the scope of this technical assessment[cite: 76].
* [cite_start]**User Intent:** We assume users are seeking informative guidance and will be redirected if they ask for professional medical advice[cite: 95].
