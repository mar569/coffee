

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RightCol() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        polit: false,
    });

    const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const validateForm = () => {
        const newErrors: Partial<Record<keyof typeof formData, string>> = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\+?[0-9\s-]{11,15}$/;

        if (!formData.name) newErrors.name = 'Имя обязательно';
        if (!formData.email || !emailPattern.test(formData.email)) newErrors.email = 'Введите корректный E-MAIL';
        if (!formData.phone || !phonePattern.test(formData.phone)) newErrors.phone = 'Введите корректный номер телефона';
        if (!formData.polit) newErrors.polit = 'Необходимо согласие с политикой конфиденциальности';

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            toast.success('Заявка успешно отправлена, ожидайте звонок!');
            setFormData({ name: '', email: '', phone: '', polit: false });
        }
    };

    return (
        <form className='flex flex-col mt-4 md:flex-row w-full max-w-[966px] justify-between items-center' onSubmit={handleSubmit}>
            <div className='max-w-[402px] w-full mb-4 md:mb-0'>
                <h2 className='font-bold text-[#EBF5E4] text-[24px] md:text-4xl pb-4'>ПРЕДЛОЖЕНИЕ <br />
                    ДЛЯ КОРПОРАТИВНЫХ <br /> КЛИЕНТОВ</h2>
                <p className='text-[#F8E4BECC] text-[20px] md:text-[28px] leading-[18px] md:leading-[28px]'>Индивидуальные условия! <br /> Для бизнеса, для офисов, <br /> ресторанов, кофеен, отелей</p>
            </div>

            <div className='flex flex-col w-full max-w-[488px]'>
                <input
                    className='bg-[#19161C]  cursor-pointer border border-[#b0adb3] text-center text-[#aebba3] p-3 mb-6 rounded-xl'
                    name="name"
                    placeholder="ИМЯ"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <span className='text-red-500'>{errors.name}</span>}

                <input
                    className='bg-[#19161C]  cursor-pointer border border-[#b0adb3] text-center text-[#aebba3] p-3 mb-6 rounded-xl'
                    type="email"
                    name="email"
                    placeholder="E-MAIL"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <span className='text-red-500'>{errors.email}</span>}

                <input
                    className='bg-[#19161C]  cursor-pointer border border-[#b0adb3] text-center text-[#aebba3] p-3 mb-6 rounded-xl'
                    type="tel"
                    name="phone"
                    placeholder="ТЕЛЕФОН"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                {errors.phone && <span className='text-red-500'>{errors.phone}</span>}

                <div className='mb-5'>
                    <label className='leading-[10px] text-[#d3dfc8] md:leading-[14px] text-sm  cursor-pointer'>
                        <input
                            className='mr-2'
                            type="checkbox"
                            name="polit"
                            checked={formData.polit}
                            onChange={handleChange}
                            required
                        /> Нажимая на кнопку «Отправить», я соглашаюсь с политикой конфиденциальности
                    </label>
                    {errors.polit && <span className='text-red-500'>{errors.polit}</span>}
                </div>

                <button className='border border-[#ffffff] bg-[#211b25] text-center text-[#abaea4] p-4 rounded-xl  cursor-pointer' type="submit">ПОЛУЧИТЬ ОПТОВЫЙ ПРАЙС</button>
            </div>
            <ToastContainer />
        </form>
    );
}
