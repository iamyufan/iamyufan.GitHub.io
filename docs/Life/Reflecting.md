# 自我解剖 Information for Personal Statement

> Yufan Zhang

> MAY 31, 2022

---

## **#学术背景和目标**

---

### **当年高考成绩和高中阶段排名如何？**

我的高中就读于济钢高中，从我的观察来看，为了取得更高的一本率，学校将更多的中心放在了对于中等生的培养。我常常排到级部的前十名，但在看似不错的排名背后，是每次模拟考试和高考仅仅刚够 985 末流高校的分数。

但幸运的是，我的父母很早就开始为我的升学寻找其他的可能性，包括多所大学的自主招生计划和可能的留学项目。最终，我以高考 604 的分数加上额外的面试和笔试成绩，被 DKU 录取。
起初，我还对这样一所崭新的中外合办大学（我是第二届本科生）抱有一定的犹豫。但现在回头来看，其提供的独一无二的通识博雅教育和国际视野，在短短三年的大学生活中，完完全全重新塑造了我。

---

### **当初为什么选择这个专业（Data Science）**

除了制作 PPT 和写 Word，我在上大学之前几乎没有接触过电脑，直到大学前的暑假才拥有了第一台笔记本电脑。
但其实大一的我想要选择的专业是 Media and Arts 专业，因为我很热衷于通过自己所掌握的设计相关的知识与技术，将一件饱满我对于美的认知的「艺术品」（例如一张海报或是一段微电影）呈现在大家的面前，与此同时，将设计或者制作它们的过程与复杂埋藏于背后。
这种思想很大部分源于我高中以来的人生偶像「Steve Jobs」的价值观，即将科技与人文结合，并把一副接近完美的、极简的、又可以解决现实生活问题的作品带给世界。

但得益于 DKU 的通识博雅教育，和自己对于跳出舒适区的决心，我在大一下半年选修了一门计算机导论课程（COMPSCI 101）。
这门课对于初次接触编程的我身份具有挑战性，加上大一才刚刚开始适应的全英文教学，我在这门课上的学习说不上一帆风顺。
但在一次次敲出代码，debug，解决问题的过程中，我逐渐发现了自己对于计算机编程的兴趣，写起代码来也越来越顺利。
此外，我也并没有放下之前对于设计和艺术的一些感悟，在编程的过程中我额外注意代码的干净度和可复用性。

在此之后，我又选择了很多计算机/数据科学相关的课程，我发现自己已经被数据科学（Data Science）这样一个融合了数学、统计学、计算机科学和甚至于哲学的的跨学科专业所深深吸引。
更为重要的是，在一次次的课程学习、文献阅读和科研实践中，我也真切地感受到了 Data Science 在解决实际问题中发挥的重要作用。因此，在大二的时候，我毫不犹豫地选择了这个专业。

更具体一点，我想举几个例子，来与你分享为什么 Data Science 每每都让我饱含热忱。

第一个就是我在 2020 年暑假在中科院计算技术研究所（Institute of Computing Technology, Chinese Academy of Sciences）的一段暑期科研（[了解更多](../Innovate/CycleGAN.md)）。
在短短两周的时间里，我系统地学习了计算机视觉从上世纪末的传统机器学习方法到如今深度学习盛行的发展过程，并且和其他同学实现了一个风格迁移系统。
就是这个风格迁移的模型让我深深被数据科学，尤其是深度学习，的潜力与能力所震撼和感动。
这种感觉是比我在之前只是从某些新闻中听说「AI 生成图片/人脸」之类的报道来得更为震撼，因为这次是我从底层深刻了解并且实现了这个不可思议的算法。

第二个就是 Data Science 作为一个理工科，却蕴含着深深的神秘色彩和哲学思考。当我每次回看某一个模型或算法时，这点尤为明显。每一遍重新的深入思考，总会给我带来新的理解和认识。
比如在前面提到的中科院的科研过程中所提到的风格迁移模型，第一遍实现时，会认为 AI 记住了不同风格域里面的特征，然后把这个特征「画」在了另一个风格域的图片上。

但在后来 DKU 的机器学习课（STATS 302）上，我和其他组员在期末又深入研究了一个著名的图片生成深度学习模型，GAN(Generative Adversarial Network)，的底层数学原理（[了解更多](../Innovate/GAN.md)），我又得到了新的认知：
所谓的某个风格域里面的特征，其实是这个风格中所有图片在一个高纬度空间的概率分布，而 GAN 中的生成器(Generator)实际上就是通过若干个卷积层学习到这个概率分布，并且通过这个分布生成图片。

更进一步，我和另一位同学在 DKU 的跨学科数据分析课程（STATS 402）中，设计并开发了一个特定风格字体生成的模型（[了解更多](../Research/MFNet.md)），我又对 GAN 所代表的图片生成模型有了新的认知：
每一张图片都包含着不同的语义信息，例如，一张字体的图片，包含的语义信息就至少包括(1)它所代表的是哪一个字 (2)它的字体的风格是什么样的，而一个 GAN-based 的模型中，多个 generator 就可以通过激励学习到不同的语义信息。
结合上一个思考所得，不用的 generator 其实就是学习不同语义信息各自隐藏的概率分布。

第三个就是 Data Science 这个专业蕴含的丰富的应用潜力和发展空间。虽然近几年来，越来越多的人涌入 Data Science，尤其是深度学习的研究和产业中来，我并没有看到这个行业的潜力有在近期被挖掘干净的可能性。
往近点说，随着互联网技术的发展和越来越多的人可以连接到互联网，各行各业对于收集数据、处理数据、理解数据、并且利用数据解决问题的需求只增不减，这也是 Data Science 急需优秀专业人才的空间。
目光在长远一点，AI 领域的最终目的，在我看来，是创造出可以像人类一样归因并且采取合理行动的一个系统。无论是完全自动驾驶、AI 医疗或是全能 AI，都还有很长的路程要走，换而言之，都需要更多的 Data Science 人才投入智慧与努力。

---

### **评述自己大学期间的学业表现**

大学三年以来，我的 GPA 为 3.74。此外，我的专业 GPA 也达到了 3.91。我对于取得这样的成绩已经较为满意。
值得注意的是，大一结束时我的 GPA 仅仅为 5.56。这个首先是因为大一对于全英文教学的不适应，其次是初入 DKU 的我选择了一些不在我舒适区里面的课程，导致得到的分数并不是很高。
诚然，这些课程也让我教给我前 18 年从未了解过的文化和思想。

大二之后，我更多的选择了 Data Science 的专业课程，慢慢发掘了我在计算机科学、数学和统计学上的兴趣与天赋，也发展出了一套不断演化的学习方法，助力我在大学的学业表现上不断进步，这点也体现在 GPA 的持续增长上。
具体来说，我摒弃了普遍大陆学生高考的学习经验，即一定要把所有知识点背到滚瓜烂熟、铭记于心为止。
我认为，在如今这样一个信息爆炸的互联网时代，一个人的知识库不应该是死板、依赖背诵的。
可以这么说，几乎所有的知识都可以通过 Google 搜索到，同一个知识点在网上也有几乎无数多个资源来学习。
而作为一名大学生以及未来的国际人才，我认为重要的是「快速学习」和「信息检索」的能力。而这也是 DKU 独特的七周小学期的教学风格培养我的。

因此，我在大学的学习过程中，我对知识的快速提取、应用能力不断进步。
举例来说，在大三我选修的一门云计算课程（COMPSCI 401）中，我们的作业常常是需要短时间内熟悉并应用之前从未用过的编程框架、编程思想来解决问题。
这就体现了快速学习和信息检索能力的重要性。与此同时，我也认为这些品质和能力也是日后在工作中的必备技能。

---

### **欲申请的专业是什么；感兴趣的方向有哪些**

就我所知，Data Science 专业的学生大多会朝三个方向发展：

1. 偏向于金融或者商科的 Business Analysis，深入咨询/投行行业，用数据分析为商业策略赋能。
2. 偏向于在编程上不断积累，学习计算机或者软件开发的 Computer Science
3. 专注于数据科学本身，参与到数据科学整个流程中去，包括数据挖掘、清洗、建模、可视化等

我个人更倾向于后两者，也相信我对后两者的学习更有信心的能力。

此外，我还对一个领域的专业很感兴趣，就是区块链技术。

#### **数据科学 Data Science**

#### **计算机科学 Computer Science**

---

### **特别感兴趣的学校和教授**

---

### **短期和长期职业目标分别是什么，你渴望的职位是什么**

---

### **国内外同行业发展趋势阐述**

---

### **专业类自学经历**

---

## **#个性与价值观**

---

### **深刻人生感悟的一个事件或一句富有哲理的人生箴言**

---

### **人生价值观和人生信念**

---

### **在通往学业/事业的道路上有哪些地方需要改进或者提高**

---