'use client';
import axios from 'axios';
import { useEffect } from 'react';

export default function Page() {
    useEffect(() => {
        const createUser = async () => {
            try {
                await axios.post('/api/user');
            } catch (error) {
                console.error('Error creating user:', error);
            }
        };

        createUser();
    }, []);
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
    );
}
