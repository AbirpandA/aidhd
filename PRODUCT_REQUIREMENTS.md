

# **Product Requirements Document (PRD): Aidhd**

## **1. Target Users & Pain Points**

### **Target Users**

Aidhd is designed for the average Indian citizen—particularly middle-income individuals and elderly users—who find health insurance complex, confusing, and emotionally stressful.

### **Key Pain Points**

* **Jargon Overload**
  Insurance terms like *co-pay*, *deductible*, and *waiting period* are difficult to understand and often poorly explained.

* **Lack of Personalization**
  Existing platforms recommend generic “top-rated” policies instead of tailoring suggestions to individual health conditions and financial constraints.

* **Clinical, Transactional Experience**
  Current systems lack empathy and fail to acknowledge the emotional weight of healthcare decisions.

* **Information Asymmetry**
  Users cannot easily verify whether recommendations are based on actual policy documents or sales-driven suggestions.

---

## **2. Feature Prioritization & Rationale**

Our roadmap prioritizes **Document Intelligence** and **Empathy**, as these are core differentiators.

### **High Priority Features**

1. **Core RAG Engine**
   The backbone of the system. Ensures all outputs are grounded in actual policy documents.

2. **6-Field Personalized Profile**
   A strict six-field input system that drives all recommendations:

   * Age
   * Lifestyle
   * Pre-existing Conditions
   * Annual Income
   * City/Tier
   * Full Name

3. **Interactive Chat Explainer**
   Enables users to ask contextual questions like:
   *“What does this policy mean for me?”*
   Improves transparency and trust.

---

### **Medium Priority Features**

4. **Admin Knowledge Management System**
   Allows updating policy documents without requiring code changes, ensuring scalability and maintainability.

---

## **3. Recommendation & Matching Logic**

The AI agent uses a weighted matching system based on user profile inputs:

| **User Field**              | **Impact on Recommendation**                                                                   |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| **Age**                     | Adjusts premium sensitivity and identifies age-specific clauses (e.g., senior waiting periods) |
| **Lifestyle**               | Prioritizes policies with benefits like OPD coverage for active users                          |
| **Pre-existing Conditions** | Filters policies based on exclusions and waiting periods                                       |
| **Annual Income**           | Sets affordability limits and suggests appropriate sum insured                                 |
| **City / Tier**             | Matches policies with strong hospital networks in the user’s region                            |
| **Full Name**               | Personalizes the recommendation narrative for a human touch                                    |

---

## **4. Grounding & Transparency Strategy**

To ensure trust and eliminate hallucinations, Aidhd follows strict grounding principles:

* **Source-Based Responses**
  Every factual claim must be backed by a clause from the uploaded policy document.

* **Structured Outputs**
  Each recommendation includes:

  * Peer Comparison Table
  * Coverage Details Table
  * Personalized “Why This Policy” explanation

* **Explainable Language**

  * All insurance terms are explained on first use
  * Tone remains warm, clear, and non-technical

---

## **5. Assumptions**

* **Document Inputs**
  Policy documents will be available in PDF, JSON, or TXT formats with standard terminology.

* **Admin Access Control**
  Environment-variable-based authentication is sufficient for the current scope.

* **User Intent**
  Users seek guidance, not medical advice. Any medical queries will be redirected appropriately.

