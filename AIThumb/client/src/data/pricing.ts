import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Temel",
        price: 450,
        period: "500 Kredi",
        features: [
            "50 Premium Yapay Zeka Thumbnail",
            "Yeni başlayanlar için ideal",
            "Tüm yapay zeka modellerine erişim",
            "İndirmelerde filigran yok",
            "Yüksek kalite",
            "Ticari kullanım izni",
            "Kredilerin süresi asla dolmaz"
            
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 850,
        period: "1100 kredi",
        features: [
            "110 Premium Yapay Zeka Thumbnail",
            "Orta seviye kullanıcılar için ideal",
            "Tüm yapay zeka modellerine erişim",
            "İndirmelerde filigran yok",
            "Yüksek kalite",
            "Ticari kullanım izni verilmiştir",
            "Kredilerin süresi asla dolmaz"
        ],
        mostPopular: true
    },
    {
        name: "Ultra",
        price: 1400,
        period: "2800 kredi",
        features: [
            "280 Premium Yapay Zeka Thumbnail",
            "Profesyoneller için en iyisi",
            "Tüm yapay zeka modellerine erişim",
            "İndirmelerde filigran yok",
            "Yüksek kalite",
            "Ticari kullanım izni verilmiştir",
            "Kredilerin süresi asla dolmaz"
        
        ],
        mostPopular: false
    }
];