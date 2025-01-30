import nodemailer from "nodemailer";

export async function sendEmail (to,subject,html){
    const transporter = nodemailer.createTransport({
        service : "gmail",
        auth: {
            user: "somoododwan97@gmail.com",
            pass: "zehm wcfn loaa xpun",
        },
    });

    const info = await transporter.sendMail({
        from: '"node 10" <somoododwan97@gmail.com>', // sender address
        to, // list of receivers
        subject, // Subject line
        html
    });
}
