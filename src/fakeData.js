const pizzaData = [
    {
        name: "Callback Hell Acılı Pizza",
        price: 45,
        description: "Bu pizza, 'callback hell' terimini anımsatacak kadar karmaşık bir tat deneyimi sunuyor. Her ısırıkta farklı bir acı seviyesi ile karşılaşıyor, tıpkı bir callback fonksiyonunun içinde kaybolmuş gibi. Acı biber ve baharatlar o kadar yoğun ki, pizza bittiğinde bile hala ardında bıraktığı 'callback'leri hissediyorsunuz. Ancak endişelenmeyin, her lokma biraz daha 'debug' edilmiş gibi. Bu pizza, zorlu projelerde 'callback hell' yaşamak isteyenler için ideal. Bir dilim aldığınızda, “Daha fazla acı, daha fazla çözüm!” diyebilirsiniz.",
        rating: 4.5,
        reviewCount: 150
    },
    {
        name: "Promise.all Pepperoni",
        price: 50,
        description: "Tıpkı 'Promise.all' fonksiyonu gibi, her şey bir arada ve mükemmel şekilde zamanlanmış. Bu pizza, pepperoni dilimlerinin ve mozzarella peynirinin birleşimiyle eşsiz bir tat sunuyor. Her malzeme tam zamanında yerini alıyor, tıpkı bir promise'in başarılı bir şekilde çözülmesi gibi. Sadece bir dilim almak bile, bütün tatları bir arada hissetmenizi sağlıyor. Her lokma, tıpkı 'Promise.all' gibi sorunsuz ilerliyor. Bu pizza ile, “Her şey bir arada ve harika!” diyebilirsiniz.",
        rating: 4.7,
        reviewCount: 200
    },
    {
        name: "Async/Await Four Cheese",
        price: 60,
        description: "Asenkron bir deneyim yaşamak isteyenler için, her peynir 'await' ediyor ve mükemmel bir birleşim oluşturuyor. Mozzarella, cheddar, parmesan ve gorgonzola peynirlerinin mükemmel uyumu, sanki her biri sırayla bekliyor ve doğru anda yerini alıyor. Tıpkı asenkron fonksiyonlar gibi, birbiriyle karışmadan ve kusursuzca ilerliyor. Her dilimde bir tat patlaması, ama hepsi zamanında ve düzenli. Bu pizza, “Bir dilim daha beklemeyin, hemen yiyin!” diyebilirsiniz.",
        rating: 4.8,
        reviewCount: 180
    },
    {
        name: "Null Pointer Exception Veggie",
        price: 48,
        description: "Sebzelerle dolu bu pizza, 'null pointer exception' hatasını andıran beklenmedik tatlarla dolu. Her lokma, farklı bir tat patlaması yaratıyor, ama ne yazık ki bazen bir dilim eksik olabiliyor. Tıpkı null pointer hatası gibi, bazen sebzelerin tam olarak ne olduğunu çözemiyorsunuz, ama bu da pizzanın güzelliği. Sebzeler karışıyor, tatlar uçuşuyor, ancak her şeyin sonu güzel bir çözümle bitiyor. Bu pizza, hataları tolere edebilecek ve her an yenilik arayanlar için ideal. Bir dilim aldıktan sonra, “Null pointer hatası yok, sadece lezzet var!” diyebilirsiniz.",
        rating: 4.3,
        reviewCount: 120
    },
    {
        name: "Spread Operator BBQ Chicken",
        price: 55,
        description: "Barbekü tavuk ve peynirin birleşimi, tıpkı 'spread operator' gibi her yere dağılacak kadar lezzetli. Pizza her lokmada genişliyor ve lezzetler her bir kenara yayılıyor. Tıpkı bir fonksiyonun her parametreyi alıp işlemesi gibi, her malzeme mükemmel bir şekilde entegre oluyor. Barbekü sosunun zenginliği, tavuk ve peynirin yoğunluğu ile birleşiyor. Bu pizza, her 'spread' ile daha da büyüyor, her dilim daha fazla tat sunuyor. Bir dilim aldıktan sonra, “Spread ettikçe daha lezzetli!” diyebilirsiniz.",
        rating: 4.6,
        reviewCount: 160
    },
    {
        name: "Event Loop Hawaiian",
        price: 52,
        description: "Tıpkı event loop gibi, bu pizza her an yenmeye hazır ve mükemmel bir döngüye sahip. Ananas ve jambon, tıpkı bir event listener gibi sürekli devrede ve birbirini tamamlıyor. Her lokma, taze ve canlı tatlar sunuyor, sanki her şey doğru zamanda doğru yerde. 'Event loop' gibi, bir kez başlattığınızda, her lokma bir sonraki lokmayı çağırıyor. Bu pizza, tıpkı eventlerin düzenli bir şekilde işlediği bir sistem gibi sorunsuz bir deneyim sunuyor. Bir dilim aldıktan sonra, “Bu döngü bitmesin!” diyebilirsiniz.",
        rating: 4.4,
        reviewCount: 140
    },
    {
        name: "Destructuring Margarita",
        price: 58,
        description: "Mozzarella ve fesleğenle yapılan bu pizza, 'destructuring' gibi her malzemeyi doğru şekilde yerleştiriyor. Fesleğen, domates sosu ve mozzarella bir araya geldiğinde, her şeyin yeri tam olarak belli. Tıpkı destructuring işlemi gibi, her şey kendi yerinde ama birleşince harika bir sonuç ortaya çıkıyor. Her dilim, doğru 'deconstructed' lezzetleri sunuyor. Sade ama etkili bir tat deneyimi yaşatıyor. Bu pizza, düzeni ve mükemmel uyumu sevenler için ideal. Bir dilim aldıktan sonra, “Her şey yerli yerinde!” diyebilirsiniz.",
        rating: 4.7,
        reviewCount: 190
    },
    {
        name: "IIFE Meat Lovers",
        price: 65,
        description: "IIFE (Immediately Invoked Function Expression) gibi, bu pizza hemen etkisini gösteriyor. Et severler için, hemen başlamak isteyenlere uygun, doyurucu ve hızlı bir çözüm. Sosis, pepperoni, jambon ve dana eti ile dolu bu pizza, her ısırıkta tatmin edici bir sonuç sunuyor. Tıpkı bir IIFE gibi, pizzayı bitirene kadar her şey tamamlanmış oluyor. Bu pizza, 'derhal sonuç' isteyenler için mükemmel. Bir dilim aldıktan sonra, “Başlangıçtan sonuca kadar!” diyebilirsiniz.",
        rating: 4.9,
        reviewCount: 220
    },
    {
        name: "Map Function Seafood",
        price: 70,
        description: "Deniz ürünleriyle yapılan bu pizza, 'map' fonksiyonu gibi her bir malzeme üzerinde farklı bir işlem yaparak harika bir sonuç ortaya koyuyor. Karides, somon ve balık her lokmada farklı bir tat patlaması yaratıyor. Her lokma, başka bir deniz ürünüyle zenginleşiyor, tıpkı map fonksiyonunun her elemanı dönüştürmesi gibi. Bu pizza, her dilimiyle yeni bir keşif sunuyor. Deniz ürünleriyle dolu, zengin ve doyurucu bir pizza arayanlar için ideal. Bir dilim aldıktan sonra, “Bu pizza, harika bir map fonksiyonu!” diyebilirsiniz.",
        rating: 4.6,
        reviewCount: 130
    },
    {
        name: "Reduce Spicy Veggie",
        price: 50,
        description: "Acı biberle yapılan bu pizza, 'reduce' fonksiyonu gibi her lokmada daha yoğun bir tat bırakıyor. Her sebze, pizza üzerinde birleştirilip 'reduce' ediliyor, ve her dilim daha yoğun bir lezzet sunuyor. Tıpkı reduce fonksiyonunun her bir adımı toplaması gibi, bu pizza da her ısırıkta daha da yoğunlaşıyor. Sebzelerin acılığı, taze baharatlar ve peynirle birleşiyor. Bu pizza, daha fazla tat isteyenler için mükemmel bir seçenek. Bir dilim aldıktan sonra, “Beni reduce et, beni yoğunlaştır!” diyebilirsiniz.",
        rating: 4.2,
        reviewCount: 110
    },
    {
        name: "Set Timeout Deluxe",
        price: 65,
        description: "Biraz bekleyin, ama beklediğinize değecek. 'setTimeout' gibi, pizza biraz bekliyor ama sonunda mükemmel bir tat patlaması yaratıyor. Mozzarella, cheddar, ve taze sebzelerle yapılan bu pizza, sabırla olgunlaşıyor ve sonunda sizi tatmin ediyor. Sadece bir dilim aldıktan sonra, “Beklemek değdi!” diyebilirsiniz. Her dilim, beklediğinizden daha fazla lezzet sunuyor. Bir dilim aldıktan sonra, “Her şey zamanında!” diyebilirsiniz.",
        rating: 4.7,
        reviewCount: 180
    }
];


export default pizzaData;
