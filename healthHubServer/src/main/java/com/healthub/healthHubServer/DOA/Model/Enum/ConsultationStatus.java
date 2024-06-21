package com.healthub.healthHubServer.DOA.Model.Enum;

public enum ConsultationStatus {
    REJECTED("Rejected"),
    PENDING("Pending"),
    DONE("Done");


    private final String name;

    ConsultationStatus(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

}
