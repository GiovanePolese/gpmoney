import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
const [type, setType] = useState('deposit');

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type='button' 
                onClick={onRequestClose} 
                className='react-modal-close'
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar trasação</h2>
            
                <input
                    placeholder='Título'
                />

                <input 
                    type='number'
                    placeholder='Valor' 
                />

                <TransactionTypeContainer>
                    <button
                        type='button'
                        className={type == 'deposit' ? 'active' : ''}
                        onClick={() => { setType('deposit'); }}
                    >
                        <span>Entrada</span>
                    </button>

                    <button
                        type='button'
                        onClick={() => { setType('withdraw'); }}
                    >
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <input
                    placeholder='Categoria'
                />

                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}