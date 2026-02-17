export function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "CnC Physiotherapy & Spine Clinic",
        "url": "https://cncphysio.com",
        "logo": "https://cncphysio.com/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-120-3137252",
            "contactType": "customer service"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "B-Block Market, Sector 122",
            "addressLocality": "Noida",
            "addressRegion": "UP",
            "postalCode": "201301",
            "addressCountry": "IN"
        },
        "sameAs": [
            "https://instagram.com/cnc_physiotherapy",
            "https://facebook.com/cncphysio"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
