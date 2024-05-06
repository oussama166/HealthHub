package com.healthub.healthHubServer.DOA.Model.Enum;

public enum MedicalSpecialty {
    CARDIOLOGY("Cardiology", "Specializes in heart diseases and circulatory system disorders."),
    DERMATOLOGY("Dermatology", "Focuses on skin, hair, and nails, including diagnosis and treatment of related conditions."),
    ENDOCRINOLOGY("Endocrinology", "Deals with disorders of the endocrine system, including hormones and metabolism."),
    GASTROENTEROLOGY("Gastroenterology", "Specializes in the digestive system and its disorders."),
    HEMATOLOGY("Hematology", "Focuses on blood and blood disorders."),
    NEUROLOGY("Neurology", "Deals with disorders of the nervous system, including the brain, spinal cord, and nerves."),
    ONCOLOGY("Oncology", "Specializes in the diagnosis and treatment of cancer."),
    ORTHOPEDICS("Orthopedics", "Focuses on conditions related to the musculoskeletal system, including bones, joints, muscles, and ligaments."),
    PEDIATRICS("Pediatrics", "Focuses on medical care for infants, children, and adolescents."),
    PSYCHIATRY("Psychiatry", "Specializes in mental health disorders and their treatment."),
    RADIOLOGY("Radiology", "Focuses on medical imaging techniques to diagnose and treat diseases."),
    SURGERY("Surgery", "Includes various surgical specialties such as general surgery, cardiothoracic surgery, neurosurgery, etc.");

    private final String name;
    private final String description;

    MedicalSpecialty(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
}
