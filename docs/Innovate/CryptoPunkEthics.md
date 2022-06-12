---
tags:
  - Plotly
  - NLP
---

# A Glance into NFT Ethics: On Ethics of CryptoPunk

<!-- ![NFTEthics](../img/innovate/I-nftethics.png) -->

> Author: Yufan Zhang, Zichao Chen
> 
> Instructor: Prof. Xin Tong
> 
> Spring 2022, Duke Kunshan University

![NFTEthics](../img/innovate/I-nftethics.png)

---

## 1. Introduction - ‘What-Why-How’

This project is trying to take a glance into ethical concerns in the Non-Fungible Token (NFT) market. We want to explore the distribution of attributes and prices on CryptoPunk, one of the most popular NFT projects around the world, via 5 data visualizations. Then, we will use the “What-Why-How” framework to further introduce our project.

What: What is our visualization dataset? Our dataset includes two parts. First, we collected the CryptoPunk attribution dataset and its on-chain transaction data. We applied a lot of processing to this dataset, shaping it into different structures to make further visualization. The second one is the dataset including more than 50000+ tweets related to NFT Ethic topics that we scrawled from Twitter using the Python Snscrape library. In addition, we also carried out a semantic analysis on this huge data set. We will make all of our datasets open source and share them with cutting-edge researchers and enthusiasts worldwide.

Why: Why do we focus on this topic? Non-fungible token (NFT) is a unit of data stored on the blockchain that certifies a digital asset to be unique [3]. With the rising price of NFT assets, more and more players have entered this field. However, we observed potential ethical concerns. For example, in the CryptoPunk collection, punks with different genders and skin colors have significantly different prices. Also, we believe that there are inequalities that arise in the generating process of some NFT collections. Therefore, we hope to understand these situations through data exploration, analysis, and ultimately using data visualization methods to present them to a wider audience and the general public.

How: How do we achieve the goals and visualize the data? Our research pipeline is from shallow to deep. We will first observe the distribution of each gender and racial factor in the Cryptopunk collection. Then, we will dive into the NFT marketplace to see the transaction situation. Finally, we will analyze the Twitter data to see the public’s ideas on the NFT ethics topic. The visualization design idioms are shown below.

## 2. Method - Data Processing and Visualization

We used DeepNote [1], a data science collaborative data science notebook, to complete our data preparation and processing part. 

Data Collection:

First, our CryptoPunk transaction data is collected from Dune [2], a blockchain analyst tool. We used the data query API in DuneAnalytics to acquire the CryptoPunk transaction data. Second, we applied the Snscrape tool to scrawl related twitter data. The related topic keyword includes: `['NFT', 'CryptoPunk', 'ethic', 'informed consent, 'transparency', 'accountability', 'privacy', 'fairness', 'trust', 'gender', 'ethnicity', 'skin tone', 'skin color']`.

Data Cleaning and Engineering:

For the CryptoPunk transaction data, we applied the Python Pandas and Numpy library to process the data based on the raw dataset. We divided the original into three parts - Transaction Database, CryptoPund Database, and Trader Database. We restructured the dataframe into these three designed databases, and we renamed the columns for further analysis.

For the Twitter data, we filtered out the tweets with at least 5 likes. Then we restructured and renamed the data columns for further analysis.

Data Visualization:

Our visualization pipeline is from shallow to deep:

The distribution of each gender and racial factor in the Cryptopunk collection >>> The transaction situation in NFT Marketplace. >>> Use sentiment analysis for the Twitter data to see the public’s ideas on the NFT ethics topic. 

A detailed introduction to the visualizations will be shown in the following paragraphs.

## 3. Result - Description for Each Visualization

### 3.1 Sankey Diagram

The Sankey diagram visualizes the distribution of CryptoPunk with different attributes.

- We categorized CryptoPunk attributes into 4 levels, Type, Gender, Skin Tone, and # of Accessories, and each column of the diagram represents one level respectively.
- Users can hover on the flow between two nodes to get the number of CryptoPunks of the two attributes that the nodes represent.
- Users can drag the node to reorganize the diagram

### 3.2 Time River Chart

Time river depicts the price changing of CryptoPunks with different attributes.

- We chooses 8 categories of CryptoPunks, which from top to bottom are `[ 'Male_Albino', 'Male_Light','Male_Medium', 'Male_Dark','Female_Albino', 'Female_Light', 'Female_Medium', 'Female_Dark']`
- Users can hover over the figure and get the exact prices of those 8 categories of CryptoPunks on the market at that time.
- Users can click the labels above to select the categories to be shown.

### 3.3 Scatter Plot

The scatter plot visualizes the CryptoPunks transactions in terms of the punk skin tone of each transaction.

- Each circle represents a transaction, whose color refers to the punk skin tone of the transaction.
- Users can zoom in by drawing an area on the figure.
- Users can hover on the particular dot to get the punk image and its transaction date.
- Users can click the legends on the top right to select which punk skin tone of the transactions to be shown.

### 3.4 Circular Network

The circular network visualizes the transaction network of CryptoPunk by year.

- Each node refers to a trader who has participated in at least one transaction of CryptoPunk, and each edge refers to a transaction with the color representing the punk skin tone of the transaction.
- Users can zoom in to see the network in more detail.
- Users can select which year the transactions took place by selecting from the drop-down menu.
- Users can click the legends on the top right to select which punk skin tone of the transactions to be shown.

### 3.5 Bar Chart & Word Cloud

The visualization of the bar chart and WordCloud reflects the sentiments of Twitter users towards NFT ethics-related topics.

- Users can hover on each section of the bar chart to get the WordCloud image of tweets from the specific year and sentiment results by sentiment analysis.
- Users can click the legends on the left to select the sentiment percentage to be shown.

## 4. Discussion - Evaluation and Reflection

In order to give our project a well-rounded evaluation and reflection section, we will then explain it in two aspects.

Pros: The biggest advantage of our project is innovation and creativity. We included rich interaction design in our visualizations. Users can click the labels to choose to view different types of data, zoom in and out to see the whole or the micro, and click to get the introduction and pictures of punk directly. These various and exciting interactions can enable the users to have a wonderful experience. Besides, we carefully selected the color and channel for each visualization, we believe they can be fairly efficient and friendly to the users.

Cons: When we added more innovative and interactive elements to the visualizations, they became a little more complicated. For the general public, it may take a little time to learn about NFT and get used to these advanced visualizations.

## 5. Conclusion

NFT is a very hot and popular market right now, and the number of players is growing rapidly. However, as we discussed in the introduction section, the NFT market currently presents potential ethical and fairness issues. In our project, we successfully collected and processed data about market transactions and Twitter discussions. In addition, we use five highly interactive visualizations to expose and demonstrate these potential ethical and equity issues to the public. 

Our visualizations demonstrate that different levels of gender and racial inequality have emerged both during the creation and trading stages of Cryptopunk. The number of Cryptopunk is unevenly distributed by gender and race, and the market price varies according to gender and race. Our project, as a pioneer in this field, will resonate with the community and more players. In addition, our project will inspire more researchers to join us and study the ethical issues of blockchain. We plan to continue our research on NFT ethics after this project and provide ethical fairness suggestions and guidance to NFT designers, the Ethereum community, and more blockchain players.

## References

Reference
[1] “Deepnote - Data science notebook for teams,” Deepnote. https://deepnote.com/

[2] “Dune,” dune.com. https://dune.com/home (accessed May 13, 2022).

[3] V. Tabora, “Looking Beyond NFT From Million Dollar JPEG Energy Hogs To Its Value Proposition,” Medium, Apr. 16, 2021. https://medium.com/datadriveninvestor/looking-beyond-nft-from-million-dollar-jpeg-energy-hogs-to-its-value-proposition-baf6f5676a4f (accessed May 13, 2022).