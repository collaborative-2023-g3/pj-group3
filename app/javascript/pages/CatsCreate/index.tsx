import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Header } from "../../templates/Header";

import { H2Header } from "../../parts/H2Header";
import { FormTemplate } from "../../templates/FormTemplate";
import { Button } from "../../parts/Button";
import { PageTemplate } from "../../templates/PageTemplate";
import { ContainerTemplate } from "../../templates/ContainerTemplate";

type Inputs = {
    name: string,
    breed: string,
    dateOfBirth: Date,
    sex: number,
    image: FileList,
    // status: string,
}


export const CatsCreate: React.FC = () => {
    const navigate = useNavigate();

    const [flashMessage, setFlashMessage] = useState<string>("");
    const { register, handleSubmit, watch, formState: { errors, isValid, isSubmitting } } = useForm<Inputs>({
        mode: "onBlur", // フォーカスが外れたらvalidationが走ってくれる
    });

    const [profileImage, setProfileImage] = useState("");
    // プロフィール画像のプレビューを表示
    useEffect(() => {
        const profileImageFile = watch("image");
        if (profileImageFile && (profileImageFile[0])) {
            const url = URL.createObjectURL(profileImageFile[0]);
            if (url !== profileImage) {
                setProfileImage(url);
            }
        }
    }, [watch("image")]);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const formData = new FormData();

        try {
            const dateOfBirth = new Date(data.dateOfBirth);
            const token = localStorage.getItem('authToken');
            const uid = localStorage.getItem('uid');

            formData.append('name', data.name);
            formData.append('breed', data.breed);
            formData.append('date_of_birth', dateOfBirth.toISOString());
            formData.append('sex', data.sex.toString());
            if (data.image.length > 0) {
                formData.append('image', data.image[0]);
            }
            formData.append('uid', uid || "");


            const response = await fetch('http://localhost:3000/api/v1/cat', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}` // トークンをヘッダーに含める
                },
                body: formData
            });

            if (response.ok) {
                // todo
                // console.log('success!');
            } else {
                throw new Error("サーバーエラーが発生しました。再度お試しください。");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (

        < ContainerTemplate >
            <Header />
            <PageTemplate>
                <H2Header>猫の登録</H2Header>
                <p className="p-signup__description">下記の情報を入力して、「登録する」ボタンを押してください。</p>
                <FormTemplate onSubmit={handleSubmit(onSubmit)}>
                    <div className="t-form__input p-signup__form--label-with-validation-message">
                        <label htmlFor="name">名前</label>
                        {errors.name?.message && <span>{errors.name.message}</span>}
                    </div>
                    <input type="text" name="name" ref={register({ required: "名前は必須です。" })} />

                    <div className="t-form__input p-signup__form--label-with-validation-message">
                        <label htmlFor="breed">猫種</label>
                        {errors.breed?.message && <span>{errors.breed.message}</span>}
                    </div>
                    <input type="text" name="breed" ref={register({
                        required: "猫種は必須です。"
                    })} />

                    <div className="t-form__input p-signup__form--label-with-validation-message">
                        <label htmlFor="dateOfBirth">生年月日</label>
                        {errors.dateOfBirth?.message && <span>{errors.dateOfBirth.message}</span>}
                    </div>
                    <input type="date" name="dateOfBirth" ref={register({
                        required: "生年月日は必須です。",
                    })} />

                    <div className="t-form__input p-signup__form--label-with-validation-message">
                        <label htmlFor="sex">性別</label>
                        {errors.sex?.message && <span>{errors.sex.message}</span>}
                    </div>
                    <div className="t-form__input p-signup__form--user-type">
                        <input type="radio" id="male" value={1} name="sex" ref={register({ required: "性別を選択してください。" })} /><label htmlFor="male">オス</label>
                        <input type="radio" id="female" value={2} name="sex" ref={register({ required: "性別を選択してください。" })} /><label htmlFor="female">メス</label>
                    </div>

                    <div className="t-form__input p-signup__form--label-with-validation-message">
                        <label htmlFor="image">プロフィール写真</label>
                        {/* {errors.image?.message && <span>{errors.image.message}</span>} */}
                    </div>
                    <div className="t-form__input p-signup__form--label-with-validation-message">
                        <label htmlFor="image-file" className="p-signup__form--profile-file-label">
                            ファイルを選択する
                            <input type="file" id="image-file" name="image" accept="image/jpeg, image/png" ref={register({
                                // validate: value => value && value[0] || "画像は必須です。",
                                // required: true
                            })} />
                        </label>
                    </div>
                    <div className="p-signup__form--image-preview">
                        {profileImage && <img src={profileImage} alt="プロフィール写真" />}
                    </div>


                    {/* <div className="p-signup__form--label-with-validation-message">
                        <label htmlFor="status">募集ステータス</label>
                        {errors.status?.message && <span>{errors.status.message}</span>}
                    </div>
                    <div className="p-signup__form--user-type">
                        <input type="radio" id="offerer" value={1} name="status" ref={register({ required: "性別を選択してください。" })} /><label htmlFor="offerer">募集中</label>
                        <input type="radio" id="female" value={2} name="status" ref={register({ required: "性別を選択してください。" })} /><label htmlFor="seeker">お見合い中</label>
                        <input type="radio" id="seeker" value={2} name="status" ref={register({ required: "性別を選択してください。" })} /><label htmlFor="seeker">里親決定</label>
                    </div> */}
                    <div className="t-login__button">
                        <Button type="submit" disabled={!isValid || isSubmitting}>登録する</Button>
                    </div>
                </FormTemplate >
            </PageTemplate>
        </ContainerTemplate >
    )
};