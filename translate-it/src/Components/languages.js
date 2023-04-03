import React from 'react'

const Languages = ({language, onLanguageChange}) => (
    <div>
        <label className='label'>Select a language</label>
        <div className='opts'>
            {LANGUAGES.map(({ label, value }) => {
                return (
                    <div key={label}
                        className={`opt ${language === value ? "selected" : ""}`}
                        onClick={() => onLanguageChange(value)}>
                            {label}
                    </div>
                )
            })}
        </div>
    </div>
  );

const LANGUAGES = [
    { label: 'Arabic', value: 'ar' },
    { label: 'Franch', value: 'fr' },
    { label: 'Spanish', value: 'es' },
    { label: 'Russian', value: 'ru' },
    { label: 'Chinese', value: 'zh' },
    { label: 'Hindi', value: 'hi' },
    { label: 'Urdu', value: 'ur' }
]

export default Languages