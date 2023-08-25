import { CarProps } from "@/components/CarCard/Car.props";

export interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}