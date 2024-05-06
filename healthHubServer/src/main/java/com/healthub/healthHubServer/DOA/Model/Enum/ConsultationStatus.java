package com.healthub.healthHubServer.DOA.Model.Enum;

public enum ConsultationStatus {
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
