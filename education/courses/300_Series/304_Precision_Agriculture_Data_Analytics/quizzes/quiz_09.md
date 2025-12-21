# Quiz 9: Computer Vision Applications

## Course 304: Precision Agriculture & Data Analytics

**Module:** 9 | **Points:** 3 | **Passing Score:** 2/3

---

### Question 1
What is the primary advantage of computer vision over human inspection in aquaponics?

A) Lower initial cost
B) Continuous, consistent, scalable monitoring 24/7
C) No training required
D) Works without electricity

**Correct Answer:** B

**Explanation:** Computer vision provides tireless, objective monitoring at scale. Humans fatigue and vary in assessments; CV systems deliver consistent quality grading, continuous growth monitoring, and early disease detection without adding labor cost. Initial investment is higher, but per-unit inspection cost drops dramatically with scale.

---

### Question 2
Which type of camera is most useful for detecting plant stress before visible symptoms appear?

A) Standard RGB camera
B) Thermal infrared camera
C) Multispectral camera
D) Security camera

**Correct Answer:** C

**Explanation:** Multispectral cameras capture specific wavelengths (e.g., near-infrared, red edge) revealing chlorophyll content and plant health before stress is visible to RGB cameras. Thermal cameras detect temperature stress. RGB cameras only capture visible symptoms. Multispectral enables 3-7 day earlier stress detection.

---

### Question 3
What does NDVI (Normalized Difference Vegetation Index) measure?

A) Plant height
B) Photosynthetic activity and biomass
C) Soil moisture
D) Temperature

**Correct Answer:** B

**Explanation:** NDVI = (NIR - Red) / (NIR + Red), where NIR is near-infrared and Red is red light reflectance. Healthy vegetation strongly reflects NIR and absorbs red light (high NDVI ~0.7-0.9). Stressed or sparse vegetation has lower NDVI. It's a proxy for chlorophyll content and active biomass.

---

### Question 4
In a CNN (Convolutional Neural Network) for plant disease detection, what is a convolutional layer's purpose?

A) Store images
B) Detect features like edges, textures, and patterns
C) Classify the final output
D) Resize images

**Correct Answer:** B

**Explanation:** Convolutional layers apply filters that detect features: early layers find edges and simple patterns, deeper layers combine these into complex features (leaf spots, lesions). This hierarchical feature extraction enables CNNs to recognize diseases from images with high accuracy, learning relevant features from training data.

---

### Question 5
What is the minimum dataset size typically needed to train a reliable plant disease classifier from scratch?

A) 10 images
B) 100 images
C) 1,000-10,000 images per class
D) 1,000,000 images

**Correct Answer:** C

**Explanation:** Training from scratch typically requires 1,000-10,000 images per disease class for reliable performance. However, transfer learning (starting from pre-trained models like ResNet or EfficientNet) can achieve good results with 100-500 images per class by fine-tuning, making it the practical approach for agriculture.

---

### Question 6
What is semantic segmentation in computer vision?

A) Counting objects
B) Assigning a class label to every pixel in an image
C) Object detection with bounding boxes
D) Image compression

**Correct Answer:** B

**Explanation:** Semantic segmentation labels each pixel (plant, background, disease, etc.), creating pixel-perfect masks. For example, separating individual lettuce heads for growth tracking or identifying precise disease extent. More detailed than bounding boxes but requires pixel-level labeled training data (time-consuming to create).

---

### Question 7
How can computer vision estimate plant growth rate non-destructively?

A) Weigh plants daily
B) Track leaf area or canopy volume from sequential images
C) Measure root mass
D) Count harvest weight

**Correct Answer:** B

**Explanation:** Time-lapse imaging measures leaf area, canopy diameter, or 3D volume without touching plants. Algorithms segment plant pixels, calculate area/volume, and track changes over time. This reveals growth curves, identifies slow growers early, and validates environmental optimization—all non-destructively, preserving plants for harvest.

---

### Question 8
What is the purpose of data augmentation when training computer vision models for agriculture?

A) Increase storage requirements
B) Artificially expand training dataset with transformed images
C) Improve image quality
D) Speed up processing

**Correct Answer:** B

**Explanation:** Data augmentation creates variations (rotation, flip, brightness, zoom) of existing images, expanding effective dataset size without collecting more images. This improves model robustness to different viewing angles, lighting, and camera positions. Critical when training data is limited, as is common in agricultural applications.

---

### Question 9
Which metric is most appropriate for evaluating a fish counting algorithm?

A) Precision and recall
B) Mean Absolute Percentage Error (MAPE)
C) R² score
D) F1-score

**Correct Answer:** B

**Explanation:** Fish counting is regression (predicting a count). MAPE = average |predicted - actual|/actual × 100% expresses error as percentage. For example, MAPE = 5% means counts are typically within 5% of truth. Precision/recall and F1 are for classification. MAPE is more interpretable than RMSE for counts.

---

### Question 10
What is the main challenge in implementing computer vision for aquaponics plant quality grading?

A) Cameras are too expensive
B) Creating consistent labeled training data for subjective quality criteria
C) Plants move too fast
D) Insufficient computing power

**Correct Answer:** B

**Explanation:** Quality grading (Grade A/B/C) is partially subjective. Creating consistent labels requires clear criteria and multiple annotators. Inconsistent labeling confuses the model. Once standards are established and 500+ examples per grade collected, models can match or exceed human consistency. Initial labeling effort is the bottleneck, not hardware.

---

**End of Quiz 9**
