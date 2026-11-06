export const projects = [
  {
    id: "aws-data-pipeline",
    number: "01",
    category: "DATA ENGINEERING",
    title: "End-to-End AWS Data Pipeline",
    subtitle: "Building a scalable cloud-based data lake.",
    description:
      "An end-to-end data engineering project that ingests raw data, processes it using PySpark and stores transformed datasets in AWS S3 for analytical querying.",
    technologies: [
      "Python",
      "PySpark",
      "AWS S3",
      "AWS Glue",
      "Athena",
      "Parquet",
    ],
    problem:
      "Raw data from multiple sources can be difficult to manage, transform and prepare for analytical workloads.",
    solution:
      "Build a cloud-based ETL pipeline that ingests raw data, performs transformations using PySpark and stores structured outputs in an optimized data lake.",
    architecture: [
      "Raw Data Sources",
      "AWS S3",
      "AWS Glue + PySpark",
      "Processed Parquet",
      "AWS Athena",
    ],
    highlights: [
      "Data ingestion from multiple sources",
      "Distributed transformations using PySpark",
      "Columnar storage using Parquet",
      "Analytical querying using Athena",
    ],
    github: "",
    status: "Planned",
  },
  {
    id: "pyspark-processing",
    number: "02",
    category: "BIG DATA",
    title: "Large-Scale Data Processing",
    subtitle: "Exploring distributed computing with Apache Spark.",
    description:
      "A distributed data processing solution demonstrating Spark transformations, joins, aggregations and performance optimization.",
    technologies: [
      "Python",
      "PySpark",
      "Spark SQL",
      "Parquet",
      "SQL",
    ],
    problem:
      "Processing large datasets with traditional single-machine approaches can create performance and scalability challenges.",
    solution:
      "Use Apache Spark to distribute data processing across partitions and optimize workloads through efficient transformations and storage formats.",
    architecture: [
      "Input Dataset",
      "Spark DataFrame",
      "Transformations",
      "Aggregations",
      "Output Dataset",
    ],
    highlights: [
      "DataFrame transformations",
      "Complex joins and aggregations",
      "Partitioning and repartitioning",
      "Caching and execution plan analysis",
    ],
    github: "",
    status: "Planned",
  },
  {
    id: "business-intelligence",
    number: "03",
    category: "DATA ANALYTICS",
    title: "Business Intelligence Dashboard",
    subtitle: "Turning business data into actionable insights.",
    description:
      "An analytics project that combines SQL, Python and Power BI to transform raw business data into interactive reports and performance metrics.",
    technologies: [
      "SQL",
      "Python",
      "Pandas",
      "MySQL",
      "Power BI",
      "DAX",
    ],
    problem:
      "Business teams often rely on manually prepared reports, making it difficult to track performance and identify trends.",
    solution:
      "Create a structured analytics workflow with data preparation, modeling and interactive dashboards.",
    architecture: [
      "Raw Business Data",
      "MySQL",
      "Python / Pandas",
      "Data Model",
      "Power BI",
    ],
    highlights: [
      "Data cleaning and preparation",
      "SQL-based analysis",
      "Dimensional data modeling",
      "Interactive KPI dashboards",
    ],
    github: "",
    status: "Planned",
  },
];