import Script from 'next/script';

export default function StructuredData() {
  // LocalBusiness schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://bytematrix.dev/#organization',
    name: 'ByteMatrix Software Solution',
    url: 'https://bytematrix.dev',
    logo: 'https://bytematrix.dev/logo.png',
    description: 'Expert software development team specializing in frontend, backend, and full stack development projects.',
    email: 'contact@bytematrix.dev',
    telephone: '+1-234-567-8901',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94103',
      addressCountry: 'US'
    },
    sameAs: [
      'https://github.com/bytematrix',
      'https://linkedin.com/company/bytematrix',
      'https://twitter.com/bytematrix'
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 37.7749,
        longitude: -122.4194
      },
      geoRadius: '50000'
    },
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Frontend Development',
          description: 'Expert frontend development services using React, Next.js, and Vue.js.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Backend Development',
          description: 'Robust backend development services using Node.js, Python, and AWS.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full Stack Development',
          description: 'End-to-end development services for web and mobile applications.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Contract-based Development',
          description: 'Flexible contract-based development services for businesses of all sizes.'
        }
      }
    ]
  };

  // Person schema for team members
  const teamMembersSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://bytematrix.dev/#person-praveen',
      name: 'Praveen Singh',
      jobTitle: 'Full Stack Developer',
      description: 'Experienced developer with a focus on scalable applications and clean code.',
      worksFor: {
        '@id': 'https://bytematrix.dev/#organization'
      },
      image: 'https://bytematrix.dev/praveen.jpeg',
      sameAs: [
        'https://github.com/praveen',
        'https://linkedin.com/in/praveen'
      ],
      knowsAbout: ['Flutter', 'Firebase', 'Dart', 'AWS', 'Git', 'Node.js', 'MongoDB', 'Docker']
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://bytematrix.dev/#person-pragya',
      name: 'Pragya Aditya',
      jobTitle: 'Full Stack Developer',
      description: 'Passionate about creating beautiful and functional web applications.',
      worksFor: {
        '@id': 'https://bytematrix.dev/#organization'
      },
      image: 'https://bytematrix.dev/pragya.png',
      sameAs: [
        'https://github.com/pragya',
        'https://linkedin.com/in/pragya'
      ],
      knowsAbout: ['React', 'Node.js', 'TypeScript', 'UI/UX', 'Vue.js', 'Python', 'AWS', 'Figma']
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://bytematrix.dev/#person-mihir',
      name: 'Mihir Jadhav',
      jobTitle: 'AI Specialist',
      description: 'Expert in artificial intelligence and machine learning.',
      worksFor: {
        '@id': 'https://bytematrix.dev/#organization'
      },
      image: 'https://bytematrix.dev/mihir.png',
      sameAs: [
        'https://github.com/mihir',
        'https://linkedin.com/in/mihir'
      ],
      knowsAbout: ['AI', 'Machine Learning', 'Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'Data Science']
    }
  ];

  // WebSite schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://bytematrix.dev/#website',
    url: 'https://bytematrix.dev',
    name: 'ByteMatrix Software Solution',
    description: 'Expert software development team specializing in frontend, backend, and full stack development projects.',
    publisher: {
      '@id': 'https://bytematrix.dev/#organization'
    }
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {teamMembersSchema.map((member, index) => (
        <Script
          key={`team-member-schema-${index}`}
          id={`team-member-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(member) }}
        />
      ))}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
